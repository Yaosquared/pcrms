import { FaGithub } from "react-icons/fa";

import { githubSignIn } from "./actions";

const GithubSignIn = () => {
  return (
    <form action={githubSignIn}>
      <button
        type="submit"
        className="flex justify-center items-center w-full bg-[#e8f0f6] hover:bg-[#e2eaf0] dark:bg-[#151e2a] dark:hover:bg-[#161f2c]/50 text-foreground rounded-md h-10 sm:h-9 lg:h-11 transition duration-300 ease-in-out gap-2"
      >
        <FaGithub size={24} />
        <p>GitHub</p>
      </button>
    </form>
  );
};

export default GithubSignIn;
