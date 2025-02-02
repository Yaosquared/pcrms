"use client";

import { toast } from "react-hot-toast";

import { credentialSignUp } from "./actions";
import SignUpButton from "./action-buttons/signup-button";

const SignUpForm = () => {
  const clientAction = async (formData: FormData) => {
    const result = await credentialSignUp(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Account successfully created");
    }
  };

  return (
    <div className="rounded-xl shadow-md w-[80%] md:w-[50%] lg:w-[44%] xl:w-[26%] p-10 xl:py-28 flex flex-col justify-center items-center bg-[#f0f8ff] backdrop-blur-lg dark:bg-[#101720] text-foreground text-xs lg:text-sm 2xl:text-base">
      <h3 className="font-bold text-lg lg:text-xl 2xl:text-2xl p-4">
        Sign up to PCRMS
      </h3>
      <form
        action={clientAction}
        className="w-full flex flex-col justify-center items-center  space-y-4 px-2 xl:px-8 py-4"
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
          placeholder="Password"
          className="h-10 w-full px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <SignUpButton />
      </form>
    </div>
  );
};

export default SignUpForm;
