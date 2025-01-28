import { format } from "date-fns";

import EditButton from "./action-buttons/edit";
import DeleteButton from "./action-buttons/delete";
import { fetchAllRecordsCount, fetchRecords } from "./actions";
import Pagination from "./action-buttons/pagination";

const CustomersTable = async ({
  search,
  page,
}: {
  search: string;
  page: string;
}) => {
  const customersData = await fetchRecords(search, page);
  const customersDataLength = await fetchAllRecordsCount();

  const getBirthDate = (birthDate: Date) => {
    return format(new Date(birthDate), "MMMM dd, yyyy");
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
    <>
      <div>
        <div className="overflow-x-auto text-sm">
          <table className="w-[100%] text-left">
            <thead>
              <tr className="border-b-2 space-x-4 whitespace-nowrap">
                <th className="px-1 py-2">Customer Name</th>
                <th className="px-1">Email</th>
                <th className="px-1">Number</th>
                <th className="px-1">Birthdate</th>
                <th className="px-1">ID Type</th>
                <th className="px-1">ID Number</th>
                <th className="px-1">Date Created</th>
                <th className="px-1">Date Updated</th>
                <th className="px-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customersData.map((customer) => (
                <tr
                  key={customer.customerId}
                  className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 cursor-pointer whitespace-nowrap"
                >
                  <td className="px-1 py-2">{customer.customerName}</td>
                  <td className="px-1">{customer.email}</td>
                  <td className="px-1">{customer.phoneNumber}</td>
                  <td className="px-1">{getBirthDate(customer.birthDate)} </td>
                  <td className="px-1">{customer.idType}</td>
                  <td className="px-1">{customer.idNumber}</td>
                  <td className="px-1">{getCreatedDate(customer.createdAt)}</td>
                  <td className="px-1">{getUpdatedDate(customer.updatedAt)}</td>
                  <td>
                    <div className="flex flex-row items-center space-x-2 lg:space-x-3">
                      <EditButton
                        id={customer.customerId}
                        name={customer.customerName}
                        email={customer.email}
                        phoneNumber={customer.phoneNumber}
                        birthDate={customer.birthDate}
                        idType={customer.idType}
                        idNumber={customer.idNumber}
                      />
                      <DeleteButton
                        id={customer.customerId}
                        name={customer.customerName}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination customersDataLength={customersDataLength} />
      </div>
    </>
  );
};

export default CustomersTable;
