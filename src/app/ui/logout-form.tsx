import Link from "next/link";

const LogoutForm = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <form className="flex flex-col space-y-4 text-foreground text-sm lg:text-base text-center items-center">
      <h1 className="p-4 text-base lg:text-lg">
        Are you sure you want to log out your account
        <span className="font-semibold"> (Admin) </span>?
      </h1>
      <div className="flex justify-between w-[100%]">
        <button
          onClick={handleClose}
          className="w-[49%] bg-slate-200 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 transition duration-200 ease-in-out text-black dark:text-white font-semibold rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm flex items-center justify-center"
        >
          Cancel
        </button>
        <Link
          href="/"
          className="w-[49%] bg-red-600 hover:bg-red-700 transition duration-200 text-white font-semibold rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm flex items-center justify-center"
        >
          <button>Log out</button>
        </Link>
      </div>
    </form>
  );
};

export default LogoutForm;
