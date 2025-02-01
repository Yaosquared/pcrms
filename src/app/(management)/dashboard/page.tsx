import { Divider } from "@mui/joy";

import MetricCards from "@/app/components/dashboard/metric-cards";
import YearlyRevenue from "@/app/components/dashboard/monthly-revenue";
import LatestRents from "@/app/components/dashboard/latest-rents";
import Complaints from "@/app/components/dashboard/complaints";

export default function Dashboard() {
  return (
    <article className="w-[100%]">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Dashboard
      </h2>
      <div className="pt-1 pb-4">
        <Divider orientation="horizontal" />
      </div>
      <div className="space-y-4">
        <MetricCards />
        <div className="flex flex-col lg:w-[100%] lg:flex-row rounded-xl space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="lg:w-[75%]">
            <YearlyRevenue />
          </div>
          <div className="lg:w-[25%]">
            <LatestRents />
          </div>
        </div>
        <Complaints />
      </div>
    </article>
  );
}
