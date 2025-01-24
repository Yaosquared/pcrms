import prisma from "@/lib/prisma";
import { format } from "date-fns";

import PaidButton from "./action-buttons/paid";
import DeleteButton from "./action-buttons/delete";
import EditButton from "./action-buttons/edit";
import { fetchRecords } from "./actions";

const PaymentsTable = async ({ search }: { search: string }) => {
  const paymentsData = await fetchRecords(search);

  const getPaymentStatus = (paymentStatus: boolean) => {
    if (paymentStatus === true) {
      return "Paid";
    } else {
      return "Not Paid";
    }
  };

  const getPaymentMethod = (paymentMethod: string | null) => {
    if (paymentMethod !== null) {
      return paymentMethod;
    } else {
      return "";
    }
  };

  const getPenalty = (penalty: string | null) => {
    if (penalty !== null) {
      return penalty;
    } else {
      return "";
    }
  };

  const getPenaltyAmount = (penaltyAmount: number | null) => {
    if (penaltyAmount !== null) {
      return `₱ ${penaltyAmount}`;
    } else {
      return "";
    }
  };

  const getTotalAmount = async (
    rentalId: string,
    penaltyAmount: number | null
  ) => {
    const totalTime = await prisma.rentals.findUnique({
      where: {
        rentalId: rentalId,
      },
      select: {
        totalTime: true,
      },
    });

    const rentalPrice = await prisma.settings.findUnique({
      where: {
        code: "RENTAL_PRICE",
      },
      select: {
        value: true,
      },
    });
    const rentalAmount =
      (totalTime?.totalTime ?? 0) * (rentalPrice?.value ?? 0);
    const totalAmount = rentalAmount + (penaltyAmount ?? 0);

    const updateTotalAmount = async () => {
      await prisma.payments.update({
        where: {
          rentalId: rentalId,
        },
        data: {
          totalAmount: totalAmount,
        },
      });
    };

    updateTotalAmount();
    if (totalAmount !== null) {
      return `₱ ${totalAmount}`;
    } else {
      return "";
    }
  };

  const getCreatedDate = (createdAt: Date) => {
    return format(new Date(createdAt), "MMMM dd, yyyy");
  };

  const getUpdatedDate = (updatedAt: Date | null) => {
    if (updatedAt !== null) {
      return format(new Date(updatedAt), "MMMM dd, yyyy");
    } else {
      return "";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-[100%] text-left">
        <thead>
          <tr className="border-b-2 space-x-4 whitespace-nowrap">
            <th className="px-1 py-2">Customer Name</th>
            <th className="px-1">Payment Status</th>
            <th className="px-1">Payment Method</th>
            <th className="px-1">Penalty</th>
            <th className="px-1">Penalty Amount</th>
            <th className="px-1">Total Amount</th>
            <th className="px-1">Date Created</th>
            <th className="px-1">Date Updated</th>
            <th className="px-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paymentsData.map((payment) => (
            <tr
              key={payment.paymentId}
              className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 cursor-pointer whitespace-nowrap"
            >
              <td className="px-1 py-2">{payment.customerName}</td>
              <td className="px-1">
                {getPaymentStatus(payment.paymentStatus ?? false)}
              </td>
              <td className="px-1">
                {getPaymentMethod(payment.paymentMethod)}
              </td>
              <td className="px-1">{getPenalty(payment.penalty)}</td>
              <td className="px-1">
                {getPenaltyAmount(payment.penaltyAmount)}
              </td>
              <td className="px-1">
                {getTotalAmount(payment.rentalId, payment.penaltyAmount)}
              </td>
              <td className="px-1">{getCreatedDate(payment.createdAt)}</td>
              <td className="px-1">{getUpdatedDate(payment.updatedAt)}</td>
              <td>
                <div className="flex flex-row items-center space-x-2 lg:space-x-3">
                  <PaidButton id={payment.paymentId} />
                  <EditButton
                    id={payment.paymentId}
                    customerName={payment.customerName}
                    paymentMethod={payment.paymentMethod}
                    penalty={payment.penalty}
                    penaltyAmount={payment.penaltyAmount}
                  />
                  <DeleteButton
                    id={payment.paymentId}
                    customerName={payment.customerName}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
