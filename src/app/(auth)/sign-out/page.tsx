import { SessionProvider } from "next-auth/react";

import SignOutForm from "@/app/components/auth/signout-form";

const SignOut = ({ toggleLogoutModal }: { toggleLogoutModal: () => void }) => {
  return (
    <>
      <SessionProvider>
        <SignOutForm toggleLogoutModal={toggleLogoutModal} />
      </SessionProvider>
    </>
  );
};

export default SignOut;
