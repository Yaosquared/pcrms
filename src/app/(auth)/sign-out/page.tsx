import { SessionProvider } from "next-auth/react";

import SignOutForm from "@/app/components/auth/signout-form";

const SignOut = () => {
  return (
    <>
      <SessionProvider>
        <SignOutForm />
      </SessionProvider>
    </>
  );
};

export default SignOut;
