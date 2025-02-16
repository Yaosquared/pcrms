import { FaTrash } from "react-icons/fa";

const ComplaintDeleteForm = ({
  id,
  name,
  clientAction,
  handleClose,
}: {
  id: string;
  name: string;
  clientAction: (formData: FormData) => Promise<void>;
  handleClose: () => void;
}) => {
  return (
    <form
      action={clientAction}
      className="flex flex-col space-y-4 text-foreground text-sm lg:text-base text-center items-center"
    >
      <FaTrash size={100} className="text-red-600 m-3" />
      <h2 className="p-2">
        Are you sure you want to delete complaint made by
        <span className="font-semibold"> {name}</span>?
      </h2>
      <input type="hidden" name="complaint-id" value={id} />
      <div className="flex justify-between w-[100%]">
        <button
          onClick={handleClose}
          className="w-[49%] bg-slate-200 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 transition duration-200 ease-in-out text-black dark:text-white font-semibold rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm flex items-center justify-center"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-[49%] bg-red-600 hover:bg-red-700 transition duration-200 text-white font-semibold rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm"
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default ComplaintDeleteForm;
