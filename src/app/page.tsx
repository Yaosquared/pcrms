import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const LandingPage = async () => {
  const session = await auth();
  if (session) redirect("/dashboard");
  else {
    redirect("/sign-in");
  }
};

export default LandingPage;
