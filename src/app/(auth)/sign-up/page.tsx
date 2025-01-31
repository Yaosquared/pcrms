import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import SignUpForm from "@/app/components/auth/signup-form";

const SignUp = async () => {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-center text-xl bg-gradient-to-r from-[#0cadc4] to-[#1a3b69]">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
