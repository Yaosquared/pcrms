"use client";

import { toast } from "react-hot-toast";

import { credentialSignUp } from "./actions";
import SignUpButton from "./action-buttons/signup-button";
import Link from "next/link";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const clientAction = async (formData: FormData) => {
    const result = await credentialSignUp(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Account successfully created");
    }
  };

  return (
    <div className="rounded-xl shadow-md w-[90%] md:w-[50%] lg:w-[44%] xl:w-[26%] p-10 flex flex-col justify-center items-center space-y-6 bg-white/80 backdrop-blur-lg dark:bg-[#101720] text-foreground text-sm lg:text-base">
      <div className="w-full px-2 xl:px-6 flex flex-col items-start gap-1">
        <h2 className="font-light text-gray-500 dark:text-gray-400">
          Welcome!
        </h2>
        <h3 className="font-semibold text-xl lg:text-2xl">
          Create your account
        </h3>
      </div>
      <form
        action={clientAction}
        className="w-full flex flex-col justify-center items-center gap-3 px-2 xl:px-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Username"
          className="h-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md placeholder:text-muted-foreground bg-white dark:bg-[#181f2a] outline-none focus:border-2 focus:border-blue-600 transition"
        />
        <div
          className="flex justify-between h-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md placeholder:text-muted-foreground bg-white dark:bg-[#181f2a] outline-none focus-within:border-2 focus-within:border-blue-600 transition
        "
        >
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            autoComplete="off"
            placeholder="Password"
            className="outline-none w-full"
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        <SignUpButton />
      </form>
      <p className="text-xs lg:text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/sign-in" className="underline text-blue-500 font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
