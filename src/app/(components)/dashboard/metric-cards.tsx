import ProgressCard from "@/app/ui/dashboard/progress-card";

interface MetricDataProps {
  id: number;
  value: number;
  colorValue: "primary" | "neutral" | "danger" | "success" | "warning";
  label: string;
}

// Placeholder data for metrics
const metricsData: MetricDataProps[] = [
  { id: 1, value: 1, colorValue: "primary", label: "Available Pet Carrier/s" },
  { id: 2, value: 4, colorValue: "danger", label: "On-Rent Pet Carrier/s" },
  {
    id: 3,
    value: 5,
    colorValue: "warning",
    label: "Rented Pet Carrier/s Today",
  },
  { id: 4, value: 5, colorValue: "success", label: "New Customer/s Today" },
];

export default function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-x-auto lg:flex lg:flex-row lg:space-x-4 lg:gap-0">
      {/* Map through metricsData array and display placeholder data in table */}
      {metricsData.map((metric: MetricDataProps) => (
        <div
          key={metric.id}
          className="flex flex-col lg:flex-row border rounded-md shadow-md items-center py-4 space-y-2 lg:space-x-2 lg:px-2 lg:w-[25%] lg:justify-center 2xl:px-4 2xl:space-x-6"
        >
          <ProgressCard value={metric.value} colorValue={metric.colorValue} />
          <p className="text-sm 2xl:text-lg font-semibold text-center">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
