const SignUp = () => {
  return (
    <div className="rounded-xl shadow-md w-[80%] md:w-[50%] lg:w-[44%] xl:w-[26%] p-10 xl:py-28 flex flex-col justify-center items-center bg-[#f0f8ff] backdrop-blur-lg dark:bg-[#101720] text-foreground text-xs lg:text-sm 2xl:text-base">
      <h3 className="font-bold text-lg lg:text-xl 2xl:text-2xl p-4">
        Sign up to PCRMS
      </h3>
      <form className="w-full flex flex-col justify-center items-center  space-y-4 px-2 xl:px-8 py-4">
        <input
          type="text"
          name="user-name"
          placeholder="Username"
          className="h-10 w-full px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="user-password"
          placeholder="Password"
          className="h-10 w-full px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <button
          type="submit"
          className="flex justify-center items-center w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md h-10 sm:h-9 lg:h-11 transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
