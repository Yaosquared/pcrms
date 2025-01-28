import { useFormStatus } from "react-dom";

const SubmitButton = ({ handleClose }: { handleClose: () => void }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      onClick={handleClose}
      className="w-[100%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] xl:w-[20%] bg-blue-600 hover:bg-blue-700 text-white rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm transition duration-300 ease-in-out"
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
};

export default SubmitButton;
