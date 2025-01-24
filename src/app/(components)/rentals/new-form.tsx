import SubmitButton from "./action-buttons/submit";

type CarrierProps = {
  carrierId: string;
  carrierName: string;
};

type CustomerProps = {
  customerId: string;
  customerName: string;
};

const RentalNewForm = ({
  clientAction,
  availableCarriers,
  customerNames,
  handleClose,
}: {
  clientAction: (formData: FormData) => Promise<void>;
  availableCarriers: CarrierProps[];
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
          Add Rental Record
        </h3>
        <select
          name="rental-carrier"
          id="carrier"
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
            Carrier Name
          </option>
          {availableCarriers.map((carrier) => (
            <>
              <input
                type="hidden"
                name="carrier-id"
                value={carrier.carrierId}
              />
              <option key={carrier.carrierId} value={carrier.carrierName}>
                {carrier.carrierName}
              </option>
            </>
          ))}
        </select>
        <select
          name="rental-customerName"
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
          name="rental-petName"
          placeholder="Pet Name"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="rental-petType"
          placeholder="Pet Type"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="rental-petBreed"
          placeholder="Pet Breed"
          required
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <SubmitButton handleClose={handleClose} />
      </form>
    </>
  );
};

export default RentalNewForm;
