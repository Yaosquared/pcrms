"use client";

import toast from "react-hot-toast";

import { generalSignOut } from "./actions";
import SignOutButton from "./action-buttons/signout-button";
import { useSessionStore } from "@/lib/store";

const SignOutForm = ({
  toggleLogoutModal,
}: {
  toggleLogoutModal: () => void;
}) => {
  const session = useSessionStore((state) => state.session);

  const clientAction = async () => {
    await generalSignOut();
    useSessionStore.getState().clearUserSession();
    toast.success("Account signed out successfully");
  };

  return (
    <div className="flex flex-col gap-6 text-foreground text-sm lg:text-base text-center items-center">
      <h1>
        Are you sure you want to log out your account
        <span className="font-semibold"> ({session?.user?.name}) </span>?
      </h1>
      <div className="flex justify-between w-[100%]">
        <button
          onClick={toggleLogoutModal}
          className="w-[49%] bg-slate-200 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 text-black dark:text-white font-semibold rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm flex items-center justify-center transition duration-300 ease-in-out"
        >
          Cancel
        </button>
        <form action={clientAction} className="w-[49%]  h-10 sm:h-9 lg:h-11">
          <SignOutButton />
        </form>
      </div>
    </div>
  );
};

export default SignOutForm;
