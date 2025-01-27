import { format } from "date-fns";

import CopyButton from "./action-buttons/copy";
import EditButton from "./action-buttons/edit";
import DeleteButton from "./action-buttons/delete";
import { fetchAllRecordsCount, fetchRecords } from "./actions";
import Pagination from "./action-buttons/pagination";

const PetCarriersTable = async ({
  search,
  page,
}: {
  search: string;
  page: string;
}) => {
  const petCarriersData = await fetchRecords(search, page);
  const petCarriersDataLength = await fetchAllRecordsCount();

  const getDeviceStatus = (deviceStatus: boolean) => {
    if (deviceStatus === true) {
      return "Connected";
    } else {
      return "Not Connected";
    }
  };

  const getRentalStatus = (rentalStatus: boolean) => {
    if (rentalStatus === true) {
      return "Rented";
    } else {
      return "Not Rented";
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
    <>
      <div>
        <div className="overflow-x-auto text-sm">
          <table className="w-[100%] text-left">
            <thead>
              <tr className="border-b-2 space-x-4 whitespace-nowrap">
                <th className="px-1 py-2">Carrier Name</th>
                <th className="px-1">Device Status</th>
                <th className="px-1">Rental Status</th>
                <th className="px-1">Date Created</th>
                <th className="px-1">Date Updated</th>
                <th className="px-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {petCarriersData.map((carrier) => (
                <tr
                  key={carrier.carrierName}
                  className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 cursor-pointer whitespace-nowrap"
                >
                  <td className="px-1 py-2">{carrier.carrierName}</td>
                  <td className="px-1">
                    {getDeviceStatus(carrier.deviceStatus)}
                  </td>
                  <td className="px-1">
                    {getRentalStatus(carrier.rentalStatus)}
                  </td>
                  <td className="px-1">{getCreatedDate(carrier.createdAt)}</td>
                  <td className="px-1">{getUpdatedDate(carrier.updatedAt)}</td>
                  <td>
                    <div className="flex flex-row items-center space-x-2 lg:space-x-3">
                      <CopyButton id={carrier.carrierId} />
                      <EditButton
                        id={carrier.carrierId}
                        name={carrier.carrierName}
                      />
                      <DeleteButton
                        id={carrier.carrierId}
                        name={carrier.carrierName}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination petCarriersDataLength={petCarriersDataLength} />
      </div>
    </>
  );
};

export default PetCarriersTable;
