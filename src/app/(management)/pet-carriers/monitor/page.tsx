import { Divider } from "@mui/joy";

import MonitorHeader from "@/app/(components)/monitor/header";
import Monitoring from "@/app/(components)/monitor/monitoring-data";

const Monitor = async () => {
  return (
    <article className="w-[100%] flex flex-col">
      <MonitorHeader />
      <div className="pt-2 pb-4">
        <Divider orientation="horizontal" />
      </div>
      <Monitoring />
    </article>
  );
};

export default Monitor;
