import SubmitButton from "./action-buttons/submit";

const PetCarrierNewForm = ({
  clientAction,
  handleClose,
}: {
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
          Add Pet Carrier Record
        </h3>
        <input
          type="text"
          name="carrier-name"
          placeholder="Carrier Name"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <SubmitButton handleClose={handleClose} />
      </form>
    </>
  );
};

export default PetCarrierNewForm;
