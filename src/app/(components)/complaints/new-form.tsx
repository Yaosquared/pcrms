import SubmitButton from "./action-buttons/submit";

type CustomerProps = {
  customerId: string;
  customerName: string;
};

const ComplaintNewForm = ({
  clientAction,
  customerNames,
  handleClose,
}: {
  clientAction: (formData: FormData) => Promise<void>;
  customerNames: CustomerProps[];
  handleClose: () => void;
}) => {
  return (
    <>
      <form
        action={clientAction}
        className="flex flex-col space-y-4 text-foreground text-sm lg:text-base"
      >
        <h3 className="text-base lg:text-lg 2xl:text-xl font-semibold">
          Add Complaint Record
        </h3>
        {/* <input
          type="text"
          name="complaint-customerName"
          placeholder="Customer Name"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        /> */}
        <select
          name="complaint-customerName"
          id="customerName"
          required
          className="h-10 w-[100%] p-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        >
          <option
            value=""
            disabled
            selected
            hidden
            className="text-muted-foreground"
          >
            Customer Name
          </option>
          {customerNames.map((customer) => (
            <>
              <input
                type="hidden"
                name="customer-customerName"
                value={customer.customerId}
              />
              <option key={customer.customerId} value={customer.customerName}>
                {customer.customerName}
              </option>
            </>
          ))}
        </select>
        <input
          type="text"
          name="complaint-description"
          placeholder="Description"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <SubmitButton handleClose={handleClose} />
      </form>
    </>
  );
};

export default ComplaintNewForm;
