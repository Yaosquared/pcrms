import { editRecord } from "./actions";

const PaymentEditForm = ({
  id,
  customerName,
  handleClose,
}: {
  id: string;
  customerName: string;
  handleClose: () => void;
}) => {
  return (
    <>
      <form
        action={editRecord}
        className="flex flex-col space-y-4 text-foreground text-sm lg:text-base"
      >
        <h3 className="text-base lg:text-lg 2xl:text-xl font-semibold">
          Edit Payment Record
        </h3>
        <input type="hidden" name="payment-id" value={id} />
        <input type="hidden" name="payment-customerName" value={customerName} />
        <input
          type="text"
          value={customerName}
          disabled
          placeholder="Customer Name"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="payment-method"
          placeholder="Payment Method"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="payment-penalty"
          placeholder="Penalty"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="number"
          name="payment-penaltyAmount"
          placeholder="Penalty Amount"
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

export default PaymentEditForm;
