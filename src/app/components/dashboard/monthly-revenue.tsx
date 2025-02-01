import YearChart from "@/app/components/dashboard/bar-graph";
import { fetchMonthlyRevenue } from "./actions";

const MonthlyRevenue = async () => {
  const monthlyRevenue = await fetchMonthlyRevenue();

  return (
    <div className="flex justify-center border rounded-md p-4 shadow-md lg:h-[100%]">
      <YearChart monthlyRevenue={monthlyRevenue} />
    </div>
  );
};

export default MonthlyRevenue;
