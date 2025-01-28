import SignOutForm from "@/app/components/auth/signout-form";

const SignOut = ({ handleClose }: { handleClose: () => void }) => {
  return <SignOutForm handleClose={handleClose} />;
};

export default SignOut;
