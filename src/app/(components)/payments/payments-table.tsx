import { messageClick } from "@/app/ui/message";

import { MdDelete } from "react-icons/md";

interface PaymentsDataProps {
  id: number;
  customerName: string;
  status: string;
  paymentMethod: string;
  penalty: string;
  penaltyAmount: string;
  overallPaymentAmount: string;
  dateRented: string;
}

// Placeholder data for payments table
const paymentsData: PaymentsDataProps[] = [
  {
    id: 1,
    customerName: "Mario",
    status: "Paid",
    paymentMethod: "Cash",
    overallPaymentAmount: "₱350",
    penalty: "",
    penaltyAmount: "",
    dateRented: "May 23, 2024",
  },
];

export default function PaymentsTable() {
  return (
    <div className="space-y-4 text-xs lg:text-sm 2xl:text-base">
      <div className="overflow-x-auto">
        <table className="w-[100%] text-left">
          <thead>
            <tr className="border-b-2 space-x-4 whitespace-nowrap">
              <th className="px-1 py-2">Cutomer Name</th>
              <th className="px-1">Status</th>
              <th className="px-1">Payment Method</th>
              <th className="px-1">Penalty</th>
              <th className="px-1">Penalty Amount</th>
              <th className="px-1">Overall Payment Amount</th>
              <th className="px-1">Date Rented</th>
              <th className="px-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through paymentsData array and display placeholder data in table */}
            {paymentsData.map((payment: PaymentsDataProps) => (
              <tr
                key={payment.id}
                className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 cursor-pointer whitespace-nowrap"
              >
                <td className="px-1 py-2">{payment.customerName}</td>
                <td className="px-1">{payment.status}</td>
                <td className="px-1">{payment.paymentMethod}</td>
                <td className="px-1">{payment.penalty}</td>
                <td className="px-1">{payment.penaltyAmount}</td>
                <td className="px-1">{payment.overallPaymentAmount}</td>
                <td className="px-1">{payment.dateRented}</td>
                <td>
                  <div className="flex flex-row items-center space-x-2 lg:space-x-3">
                    <MdDelete
                      size={24}
                      onClick={messageClick}
                      className="text-red-600 hover:text-red-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
