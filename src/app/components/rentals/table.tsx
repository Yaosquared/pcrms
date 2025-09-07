import prisma from "@/lib/prisma";
import { format } from "date-fns";

import ReturnedButton from "./action-buttons/return";
import EditButton from "./action-buttons/edit";
import DeleteButton from "./action-buttons/delete";
import { fetchAllRecordsCount, fetchRecords } from "./actions";
import Pagination from "./action-buttons/pagination";

const RentalsTable = async ({
  search,
  page,
}: {
  search: string;
  page: string;
}) => {
  const rentalsData = await fetchRecords(search, page);
  const rentalsDataLength = await fetchAllRecordsCount();

  const getRentalStatus = (rentalStatus: boolean) => {
    if (rentalStatus === true) {
      return "Returned";
    } else {
      return "Not Returned";
    }
  };

  // handle > 24 hrs rental bug
  const getRentalStartTime = (rentalStartTime: Date) => {
    return format(new Date(rentalStartTime), "hh:mm:ss a");
  };

  const getRentalEndTime = (rentalEndTime: Date | null) => {
    if (rentalEndTime !== null) {
      return format(new Date(rentalEndTime), "hh:mm:ss a");
    } else {
      return "";
    }
  };

  const getTotalTime = (
    rentalId: string,
    rentalStartTime: Date,
    rentalEndTime: Date | null
  ) => {
    if (rentalEndTime !== null) {
      const start = new Date(rentalStartTime);
      const end = new Date(rentalEndTime);
      const timeDifference = end.getTime() - start.getTime();
      const hours = Math.floor((timeDifference % 86400000) / 3600000); // Convert milliseconds to hours
      const days = Math.floor(timeDifference / 86400000); // Calculate days

      const totalTime = days * 24 + hours; // Convert days to hours and add to total hours

      const updateTotalTime = async () => {
        await prisma.rentals.update({
          where: {
            rentalId: rentalId,
          },
          data: {
            totalTime: totalTime,
          },
        });
      };

      const updateRentalStatus = async () => {
        await prisma.rentals.update({
          where: {
            rentalId: rentalId,
          },
          data: {
            rentalStatus: true,
          },
        });
      };

      updateTotalTime();
      updateRentalStatus();
      return `${totalTime} hrs.`;
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
    <>
      <div>
        <div className="overflow-x-auto">
          <table className="w-[100%] text-left">
            <thead>
              <tr className="border-b-2 space-x-4 whitespace-nowrap">
                <th className="px-1 py-2">Carrier Name</th>
                <th className="px-1">Customer Name</th>
                <th className="px-1">Pet Name</th>
                <th className="px-1">Pet Type</th>
                <th className="px-1">Pet Breed</th>
                <th className="px-1">Rental Status</th>
                <th className="px-1">Rental Start Time</th>
                <th className="px-1">Rental End Time</th>
                <th className="px-1">Total Time</th>
                <th className="px-1">Date Created</th>
                <th className="px-1">Date Updated</th>
                <th className="px-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rentalsData.map((rental) => (
                <tr
                  key={rental.rentalId}
                  className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 cursor-pointer whitespace-nowrap"
                >
                  <td className="px-1 py-2">{rental.carrierName}</td>
                  <td className="px-1">{rental.customerName}</td>
                  <td className="px-1">{rental.petName}</td>
                  <td className="px-1">{rental.petType}</td>
                  <td className="px-1">{rental.petBreed}</td>
                  <td className="px-1">
                    {getRentalStatus(rental.rentalStatus)}
                  </td>
                  <td className="px-1">
                    {getRentalStartTime(rental.rentalStartTime)}
                  </td>
                  <td className="px-1">
                    {getRentalEndTime(rental.rentalEndTime)}
                  </td>
                  <td className="px-1">
                    {getTotalTime(
                      rental.rentalId,
                      rental.rentalStartTime,
                      rental.rentalEndTime
                    )}
                  </td>
                  <td className="px-1">{getCreatedDate(rental.createdAt)}</td>
                  <td className="px-1">{getUpdatedDate(rental.updatedAt)}</td>
                  <td>
                    <div className="flex flex-row items-center space-x-2 lg:space-x-3">
                      <ReturnedButton
                        rentalId={rental.rentalId}
                        carrierId={rental.carrierId}
                      />
                      <EditButton
                        id={rental.rentalId}
                        carrierName={rental.carrierName}
                        customerName={rental.customerName}
                        petName={rental.petName}
                        petType={rental.petType}
                        petBreed={rental.petBreed}
                      />
                      <DeleteButton
                        id={rental.rentalId}
                        customerName={rental.customerName}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination rentalsDataLength={rentalsDataLength} />
      </div>
    </>
  );
};

export default RentalsTable;
