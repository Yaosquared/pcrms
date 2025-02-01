import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().optional(),
  password: z.string().min(1).optional(),
  hashedPassword: z.string().min(1).optional(),
});

export { userSchema };
