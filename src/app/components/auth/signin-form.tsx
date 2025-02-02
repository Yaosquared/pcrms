"use client";

import Link from "next/link";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";

import GithubSignIn from "./signin-github";
import { credentialSignIn } from "./actions";
import SignInButton from "./action-buttons/signin-button";

const SignInForm = () => {
  const clientAction = async (formData: FormData) => {
    const result = await credentialSignIn(formData);
    if (result?.error) {
      console.log(result.error);
      toast.error(result.error);
    } else {
      toast.success("Account successfully signed in");
      redirect("/dashboard");
    }
  };

  return (
    <div className="rounded-xl shadow-md w-[80%] md:w-[50%] lg:w-[44%] xl:w-[26%] p-10 flex flex-col justify-center items-center space-y-4 bg-[#f0f8ff] backdrop-blur-lg dark:bg-[#101720] text-foreground text-xs lg:text-sm 2xl:text-base">
      <div className="w-full px-2 xl:px-8">
        <h3 className="font-bold text-lg lg:text-xl 2xl:text-2xl p-4">
          Sign in to PCRMS with
        </h3>
        <GithubSignIn />
      </div>
      <p>or</p>
      <form
        action={clientAction}
        className="w-full flex flex-col justify-center items-center space-y-4 px-2 xl:px-8 md:pb-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Username"
          className="h-10 w-full px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Password"
          className="h-10 w-full px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <SignInButton />
        <Link
          href="/sign-up"
          className="flex justify-center items-center w-full bg-[#e8f0f6] hover:bg-[#e2eaf0] dark:bg-[#151e2a] dark:hover:bg-[#161f2c]/50 text-foreground rounded-md h-10 sm:h-9 lg:h-11 transition duration-300 ease-in-out"
        >
          <button>Sign Up</button>
        </Link>
      </form>
    </div>
  );
};

export default SignInForm;
