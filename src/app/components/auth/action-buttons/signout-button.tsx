"use client";

import { useFormStatus } from "react-dom";

const SignOutButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full h-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md text-xs lg:text-sm flex items-center justify-center transition duration-300 ease-in-out cursor-pointer"
    >
      {pending ? "Signing out..." : "Sign out"}
    </button>
  );
};

export default SignOutButton;
