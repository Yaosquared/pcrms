import SignOutForm from "@/app/components/auth/signout-form";

const SignOut = ({
  sessionProp,
  handleClose,
}: {
  sessionProp: { name: string | null };
  handleClose: () => void;
}) => {
  return <SignOutForm sessionProp={sessionProp} handleClose={handleClose} />;
};

export default SignOut;
