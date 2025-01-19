import SubmitButton from "./action-buttons/submit";

const RentalEditForm = ({
  id,
  carrierName,
  customerName,
  petName,
  petType,
  petBreed,
  clientAction,
  handleClose,
}: {
  id: string;
  carrierName: string;
  customerName: string;
  petName: string;
  petType: string;
  petBreed: string;
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
          Edit Rental Record
        </h3>
        <input type="hidden" name="rental-id" value={id} />
        <input type="hidden" name="rental-customerName" value={customerName} />
        <input
          type="text"
          name="rental-carrier"
          defaultValue={carrierName}
          placeholder="Carrier Name"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="rental-customerName"
          defaultValue={customerName}
          placeholder="Customer Name"
          disabled
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="rental-petName"
          defaultValue={petName}
          placeholder="Pet Name"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="rental-petType"
          defaultValue={petType}
          placeholder="Pet Type"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="rental-petBreed"
          defaultValue={petBreed}
          placeholder="Pet Breed"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <SubmitButton handleClose={handleClose} />
      </form>
    </>
  );
};

export default RentalEditForm;
