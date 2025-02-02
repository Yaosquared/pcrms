import NextAuth, { AuthError } from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { v4 as uuid } from "uuid";
import { encode as defaultEncode } from "next-auth/jwt";
import bcrypt from "bcrypt";

import prisma from "@/lib/prisma";
import { userSchema } from "./userSchema";

const adapter = PrismaAdapter(prisma);

export class InvalidLoginError extends AuthError {
  code = "invalid_credentials";
  constructor(message: string) {
    super(message);
    this.code = message;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: adapter,
  providers: [
    GitHub,
    Credentials({
      credentials: {
        name: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedCredentials = userSchema.parse(credentials);

        try {
          const user = await prisma.user.findUnique({
            where: {
              name: validatedCredentials.name,
            },
            select: {
              id: true,
              name: true,
              hashedPassword: true,
            },
          });

          if (!user) {
            throw new Error("No account exists in the database");
          }

          if (!validatedCredentials.password) {
            throw new Error("Password is required");
          }

          if (!user.hashedPassword) {
            throw new Error("Hashed password is missing from the database");
          }

          const isPasswordValid = await bcrypt.compare(
            validatedCredentials.password,
            user.hashedPassword
          );

          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          return user;
        } catch {
          throw new InvalidLoginError("invalid_credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true;
      }
      return token;
    },
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid();

        if (!params.token.sub) {
          throw new Error("No user ID found in token");
        }

        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        });

        if (!createdSession) {
          throw new Error("Failed to create session");
        }

        return sessionToken;
      }
      return defaultEncode(params);
    },
  },
});
