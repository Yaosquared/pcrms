// "use client";

// import { LogIn } from "./actions";
// import { useRouter } from "next/router";

// import Image from "next/image";
import Link from "next/link";

// import logo from "@/public/logo.png";

const LogInForm = () => {
  //   const router = useRouter();
  //   const handleSubmit = async (event: FormEvent) => {
  //     event.preventDefault();
  //     const formData = new FormData(event.target as HTMLFormElement);
  //     const success = await LogIn(formData);
  //     if (success) {
  //       router.push("/dashboard");
  //     }
  //   };

  return (
    <form
      //   action={LogIn}
      className="border rounded-md shadow-md w-[80%] md:w-[50%] lg:w-[40%] 2xl:w-[30%] h-[40%] md:h-[50%] 2xl:h-[60%] flex flex-col justify-center items-center space-y-4 bg-accent/60 backdrop-blur-lg dark:bg-accent/10 text-foreground text-xs lg:text-sm 2xl:text-base"
    >
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl bg-gradient-to-r from-[#0cadc4] to-[#1a3b69] bg-clip-text text-transparent">
        PCRMS
      </h2>
      <input
        type="text"
        placeholder="Username"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
        className="h-10 w-[70%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
      />
      <div className="w-[70%] relative">
        <input
          //   type={showPassword ? "text" : "password"}
          placeholder="Password"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <button
          type="button"
          //   onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          {/* {showPassword ? <IoMdEye /> : <IoMdEyeOff />} */}
        </button>
      </div>
      <Link
        href="/dashboard"
        className="flex justify-center items-center w-[70%] bg-blue-600 hover:bg-blue-700 text-white rounded-md h-10 sm:h-9 lg:h-11"
      >
        Log In
      </Link>

      {/* <button type="submit">Log In</button> */}
      <div className="w-[70%] flex flex-row justify-between text-xs 2xl:text-sm font-medium cursor-pointer">
        <p
          //   onClick={messageClick}
          className="hover:text-blue-700 hover:underline"
        >
          Forgot Password?
        </p>
        <p
          //   onClick={messageClick}
          className="hover:text-blue-700 hover:underline"
        >
          Sign up
        </p>
      </div>
    </form>
  );
};

export default LogInForm;
