"use client";

import { FaCheck } from "react-icons/fa6";
import { toast } from "react-hot-toast";

import { markAsPaid } from "../actions";

const PaidButton = ({ paymentId }: { paymentId: string }) => {
  const clientAction = async () => {
    const result = await markAsPaid(paymentId);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Payment record marked as paid");
    }
  };

  return (
    <form action={clientAction}>
      <button type="submit">
        <FaCheck
          title="Mark as paid"
          size={20}
          className="text-green-600 hover:text-green-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 transition duration-300 ease-in-out"
        />
      </button>
    </form>
  );
};

export default PaidButton;
