import SubmitButton from "./action-buttons/submit";

const ComplaintEditForm = ({
  id,
  name,
  description,
  clientAction,
  handleClose,
}: {
  id: string;
  name: string;
  description: string;
  clientAction: (formData: FormData) => Promise<void>;
  handleClose: () => void;
}) => {
  return (
    <>
      <form
        action={clientAction}
        className="flex flex-col space-y-4 text-foreground text-sm lg:text-base"
      >
        <h3 className="text-base lg:text-lg 2xl:text-xl font-semibold">
          Edit Complaint Record
        </h3>
        <input type="hidden" name="complaint-id" value={id} />
        <input
          type="text"
          name="complaint-customerName"
          defaultValue={name}
          placeholder="Customer Name"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="complaint-description"
          defaultValue={description}
          placeholder="Description"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <SubmitButton handleClose={handleClose} />
      </form>
    </>
  );
};

export default ComplaintEditForm;
