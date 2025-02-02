"use client";

import { useFormStatus } from "react-dom";

const SignUpButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex justify-center items-center w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md h-10 sm:h-9 lg:h-11 transition duration-300 ease-in-out"
    >
      {pending ? "Signing up..." : "Sign up"}
    </button>
  );
};

export default SignUpButton;
