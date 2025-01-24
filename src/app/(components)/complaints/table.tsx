import { format } from "date-fns";

import ResolveButton from "./action-buttons/resolve";
import EditButton from "./action-buttons/edit";
import DeleteButton from "./action-buttons/delete";
import { fetchRecords } from "./actions";

const ComplaintsTable = async ({ search }: { search: string }) => {
  const complaintsData = await fetchRecords(search);

  const getComplaintStatus = (complaintStatus: boolean) => {
    if (complaintStatus === true) {
      return "Resolved";
    } else {
      return "Unresolved";
    }
  };

  // Date complaint was created
  const getCreatedDate = (createdAt: Date) => {
    return format(new Date(createdAt), "MMMM dd, yyyy");
  };

  const getDateResolved = (dateResolved: Date | null) => {
    if (dateResolved !== null) {
      return format(new Date(dateResolved), "MMMM dd, yyyy");
    } else {
      return " ";
    }
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
      <div className="overflow-x-auto">
        <table className="w-[100%] text-left">
          <thead>
            <tr className="border-b-2 space-x-4 whitespace-nowrap">
              <th className="px-1 py-2">Customer Name</th>
              <th className="px-1">Description</th>
              <th className="px-1">Status</th>
              <th className="px-1">Date Resolved</th>
              <th className="px-1">Date Created</th>
              <th className="px-1">Date Updated</th>
              <th className="px-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaintsData.map((complaint) => (
              <tr
                key={complaint.complaintId}
                className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 cursor-pointer whitespace-nowrap"
              >
                <td className="px-1 py-2">{complaint.customerName}</td>
                <td className="px-1">{complaint.description}</td>
                <td className="px-1">
                  {getComplaintStatus(complaint.complaintStatus)}
                </td>
                <td className="px-1">
                  {getDateResolved(complaint.dateResolved)}
                </td>
                <td className="px-1">{getCreatedDate(complaint.createdAt)}</td>
                <td className="px-1">{getUpdatedDate(complaint.updatedAt)}</td>
                <td>
                  <div className="flex flex-row items-center space-x-2 lg:space-x-3">
                    <ResolveButton id={complaint.complaintId} />
                    <EditButton
                      id={complaint.complaintId}
                      name={complaint.customerName}
                      description={complaint.description}
                    />
                    <DeleteButton
                      id={complaint.complaintId}
                      name={complaint.customerName}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComplaintsTable;
