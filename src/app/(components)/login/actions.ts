// import prisma from "@/lib/prisma";

export const LogIn = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    console.log("Username and password are required");
    return;
  }

  // const user = await prisma.users.findFirst({ where: { username: username } });
  //   if (user && (await bcrypt.compare(password, user.password))) {
  // if (user && password === user.password) {
  //   console.log("Logged in successfully");
  //   return true;
  // } else {
  //   return false;
  // }
};
