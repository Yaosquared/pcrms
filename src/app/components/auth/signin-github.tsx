import { FaGithub } from "react-icons/fa";
import { githubSignIn } from "./actions";

const GithubSignIn = () => {
  return (
    <form action={githubSignIn}>
      <button
        type="submit"
        className="flex justify-center items-center w-full px-4 gap-3 h-10 sm:h-9 lg:h-11 bg-white dark:bg-[#151e2a] hover:bg-[#f1f5f9] dark:hover:bg-[#1f2b3a] text-gray-800 dark:text-gray-200 font-medium rounded-md shadow-md transition duration-200"
      >
        <FaGithub size={20} />
        <span>Sign in with GitHub</span>
      </button>
    </form>
  );
};

export default GithubSignIn;
