import SubmitButton from "./action-buttons/submit";

const CustomerEditForm = ({
  id,
  name,
  email,
  phoneNumber,
  birthDate,
  idType,
  idNumber,
  clientAction,
  handleClose,
}: {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  idType: string;
  idNumber: string;
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
          Edit Customer Record
        </h3>
        <input type="hidden" name="customer-id" value={id} />
        <input
          type="text"
          name="customer-name"
          defaultValue={name}
          placeholder="Customer Name"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="customer-email"
          defaultValue={email}
          placeholder="Email"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="customer-phoneNumber"
          defaultValue={phoneNumber}
          placeholder="Phone Number (+63)"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="date"
          name="customer-birthDate"
          defaultValue={birthDate.toISOString().split("T")[0]}
          placeholder="Birthdate"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="customer-idType"
          defaultValue={idType}
          placeholder="ID Type"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="customer-idNumber"
          defaultValue={idNumber}
          placeholder="ID Number"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <SubmitButton handleClose={handleClose} />
      </form>
    </>
  );
};

export default CustomerEditForm;
