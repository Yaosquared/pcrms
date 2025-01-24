import { Divider } from "@mui/joy";

import MonitorCards from "@/app/(components)/pet-carriers/monitor-cards";
import PetCarriersHeader from "@/app/(components)/pet-carriers/header";
import PetCarrierSearch from "@/app/(components)/pet-carriers/search-bar";
import PetCarriersTable from "@/app/(components)/pet-carriers/table";

export default function PetCarriers({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const search = searchParams?.search || "";

  return (
    <article className="w-[100%]">
      <PetCarriersHeader />
      <div className="pt-2 pb-4">
        <Divider orientation="horizontal" />
      </div>
      <MonitorCards />
      <div className="py-4">
        <PetCarrierSearch />
      </div>
      <PetCarriersTable search={search} />
    </article>
  );
}
