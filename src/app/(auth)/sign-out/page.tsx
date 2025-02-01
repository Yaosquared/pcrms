import { SessionProvider } from "next-auth/react";

import SignOutForm from "@/app/components/auth/signout-form";

const SignOut = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <>
      <SessionProvider>
        <SignOutForm handleClose={handleClose} />
      </SessionProvider>
    </>
  );
};

export default SignOut;
