interface ComplaintDataProps {
  id: number;
  label: string;
  count: number;
  colorClass: string;
}

// Placeholder data for complaints
const complaintsData: ComplaintDataProps[] = [
  { id: 1, label: "Total Complaints", count: 1, colorClass: "text-blue-500" },
  {
    id: 2,
    label: "Resolved Complaints",
    count: 1,
    colorClass: "text-green-500",
  },
  {
    id: 3,
    label: "Unresolved Complaints",
    count: 0,
    colorClass: "text-red-500",
  },
];

export default function Complaints() {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-base md:whitespace-nowrap">
      {/* Map through complaintsData array and display placeholder data in table */}
      {complaintsData.map((complaint: ComplaintDataProps) => (
        <div
          key={complaint.id}
          className="border p-4 rounded-md shadow-md md:w-[33%]"
        >
          <p className="text-sm md:text-base lg:text-lg font-medium">
            {complaint.label}
          </p>
          <p
            className={`${complaint.colorClass} text-sm md:text-base lg:text-lg`}
          >
            {complaint.count}
          </p>
        </div>
      ))}
    </div>
  );
}
