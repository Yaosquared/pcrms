import SubmitButton from "./action-buttons/submit";

const PaymentEditForm = ({
  id,
  customerName,
  paymentMethod,
  clientAction,
  handleClose,
}: {
  id: string;
  customerName: string;
  paymentMethod: string | null;
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
          Edit Payment Record
        </h3>
        <input type="hidden" name="payment-id" value={id} />
        <input type="hidden" name="payment-customerName" value={customerName} />
        <input
          type="text"
          value={customerName}
          placeholder="Customer Name"
          disabled
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          defaultValue={paymentMethod ?? ""}
          name="payment-method"
          placeholder="Payment Method"
          required
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
        <SubmitButton handleClose={handleClose} />
      </form>
    </>
  );
};

export default PaymentEditForm;
