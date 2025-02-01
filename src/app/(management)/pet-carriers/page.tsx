import { Divider } from "@mui/joy";

import MonitorCards from "@/app/components/pet-carriers/monitor-cards";
import PetCarriersHeader from "@/app/components/pet-carriers/header";
import PetCarrierSearch from "@/app/components/pet-carriers/search-bar";
import PetCarriersTable from "@/app/components/pet-carriers/table";

const PetCarriers = ({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    page?: string;
  };
}) => {
  const search = searchParams?.search || "";
  const page = searchParams?.page || "";

  return (
    <article className="w-[100%]">
      <PetCarriersHeader />
      <div className="pt-2 pb-4">
        <Divider orientation="horizontal" />
      </div>
      <MonitorCards search={search} page={page} />
      <div className="py-4">
        <PetCarrierSearch />
      </div>
      <PetCarriersTable search={search} page={page} />
    </article>
  );
};

export default PetCarriers;
