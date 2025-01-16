import { editRecord } from "./actions";

const RentalEditForm = ({
  id,
  carrierName,
  customerName,
  petName,
  petType,
  petBreed,
  handleClose,
}: {
  id: string;
  carrierName: string;
  customerName: string;
  petName: string;
  petType: string;
  petBreed: string;
  handleClose: () => void;
}) => {
  return (
    <>
      <form
        action={editRecord}
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
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="rental-customerName"
          defaultValue={customerName}
          disabled
          placeholder="Customer Name"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="rental-petName"
          defaultValue={petName}
          placeholder="Pet Name"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="rental-petType"
          defaultValue={petType}
          placeholder="Pet Type"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="rental-petBreed"
          defaultValue={petBreed}
          placeholder="Pet Breed"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <button
          type="submit"
          onClick={handleClose}
          className="w-[100%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] xl:w-[20%] bg-blue-600 hover:bg-blue-700 text-white rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default RentalEditForm;
