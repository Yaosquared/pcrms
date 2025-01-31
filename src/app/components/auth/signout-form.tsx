"use client";

import toast from "react-hot-toast";

import { generalSignOut } from "./actions";

const SignOutForm = ({
  sessionProp,
  handleClose,
}: {
  sessionProp: { name: string | null };
  handleClose: () => void;
}) => {
  const clientAction = async () => {
    await generalSignOut();
    toast.success("Account signed out successfully");
  };
  return (
    <div className="flex flex-col space-y-4 text-foreground text-sm lg:text-base text-center items-center">
      <h1 className="p-4 text-base lg:text-lg">
        Are you sure you want to log out your account
        <span className="font-semibold"> ({sessionProp.name}) </span>?
      </h1>
      <div className="flex justify-between w-[100%]">
        <button
          onClick={handleClose}
          className="w-[49%] bg-slate-200 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 text-black dark:text-white font-semibold rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm flex items-center justify-center transition duration-300 ease-in-out"
        >
          Cancel
        </button>
        <form
          action={clientAction}
          className="w-[49%] bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm flex items-center justify-center transition duration-300 ease-in-out cursor-pointer"
        >
          <button type="submit">Sign out</button>
        </form>
      </div>
    </div>
  );
};

export default SignOutForm;
