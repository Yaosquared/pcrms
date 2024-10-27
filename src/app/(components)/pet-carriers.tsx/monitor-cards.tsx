import PercentageCard from "@/app/ui/pet-carriers/percentage-card";

interface MonitorDataProps {
  id: number;
  value: number;
  colorValue: "primary" | "neutral" | "danger" | "success";
  label: string;
  showPercentageSign?: boolean;
}

// Placeholder data for cards
const monitorData: MonitorDataProps[] = [
  { id: 1, value: 80, colorValue: "primary", label: "PC1" },
  { id: 2, value: 14, colorValue: "danger", label: "PC2" },
  { id: 3, value: 100, colorValue: "success", label: "PC3" },
  { id: 4, value: 47, colorValue: "primary", label: "PC4" },
  { id: 5, value: 0, colorValue: "neutral", label: "PC5" },
];

export default function MonitorCards() {
  return (
    <div className="flex flex-col overflow-x-auto">
      <h3 className="pb-2 text-sm md:text-base lg:text-lg 2xl:text-xl font-medium">
        Battery Percentage
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:flex lg:flex-row lg:space-x-4 lg:gap-0">
        {/* Map through monitorData array and display placeholder data in table */}
        {monitorData.map((monitor: MonitorDataProps) => (
          <div
            key={monitor.id}
            className="flex flex-col border rounded-md justify-center items-center py-4 shadow-md space-y-2 lg:px-2 lg:w-[25%] 2xl:px-4"
          >
            <PercentageCard
              value={monitor.value}
              colorValue={monitor.colorValue}
              showPercentageSign={monitor.id !== monitorData.length}
            />
            <p className="text-sm 2xl:text-lg font-semibold">{monitor.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
