import Link from "next/link";

import { MdPeopleAlt } from "react-icons/md";

import NewButton from "./action-buttons/new";
import { fetchAllRecordsCount, fetchCustomers } from "./actions";

type CustomerProps = {
  customerId: string;
  customerName: string;
};

const ComplaintsHeader = async () => {
  const customerNames: CustomerProps[] = await fetchCustomers();
  const complaintsDataLength = await fetchAllRecordsCount();

  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Complaints ({complaintsDataLength})
      </h2>
      <div className="flex flex-row text-xs lg:text-base font-medium space-x-2">
        <NewButton customerNames={customerNames} />
        <button className="flex flex-row items-center rounded-md p-2 lg:space-x-2 xl:px-4 xl:py-3 bg-green-600 hover:bg-green-700 text-white shadow-md transition duration-300 ease-in-out">
          <Link href="/customers">
            <div className="flex flex-row items-center lg:space-x-2">
              <MdPeopleAlt size={20} />
              <span className="hidden lg:block lg:text-sm 2xl:text-base">
                Customers
              </span>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ComplaintsHeader;
