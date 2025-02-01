import { fetchComplaintsData } from "./actions";

type ComplaintProps = {
  complaintId: string;
  customerName: string;
  description: string;
  complaintStatus: boolean;
  dateResolved: Date | null;
  createdAt: Date;
  updatedAt: Date | null;
};

const Complaints = async () => {
  const complaintsData = await fetchComplaintsData();

  const getTotalComplaints = (complaintsData: ComplaintProps[]) => {
    return complaintsData.length;
  };

  const getResolvedComplaints = (complaintsData: ComplaintProps[]) => {
    return complaintsData.filter(
      (complaint) => complaint.complaintStatus == true
    ).length;
  };

  const getUnresolvedComplaints = (complaintsData: ComplaintProps[]) => {
    return complaintsData.filter(
      (complaint) => complaint.complaintStatus == false
    ).length;
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="border p-4 rounded-md shadow-md md:w-[33%]">
        <p className="text-sm md:text-base lg:text-lg font-medium">
          Total Complaints
        </p>
        <p className="text-blue-500 text-sm md:text-base lg:text-lg">
          {getTotalComplaints(complaintsData)}
        </p>
      </div>
      <div className="border p-4 rounded-md shadow-md md:w-[33%]">
        <p className="text-sm md:text-base lg:text-lg font-medium">
          Resolved Complaints
        </p>
        <p className="text-green-500 text-sm md:text-base lg:text-lg">
          {getResolvedComplaints(complaintsData)}
        </p>
      </div>
      <div className="border p-4 rounded-md shadow-md md:w-[33%]">
        <p className="text-sm md:text-base lg:text-lg font-medium">
          Unresolved Complaints
        </p>
        <p className="text-red-500 text-sm md:text-base lg:text-lg">
          {getUnresolvedComplaints(complaintsData)}
        </p>
      </div>
    </div>
    // </div>
  );
};

export default Complaints;
