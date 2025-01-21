import { Divider } from "@mui/joy";

import MonitorCards from "@/app/(components)/pet-carriers/monitor-cards";
import SearchBar from "@/app/ui/search-bar";
// import PetCarrierSearch from "@/app/(components)/pet-carriers/search-form";
import PetCarriersTable from "@/app/(components)/pet-carriers/table";
import PetCarriersHeader from "@/app/(components)/pet-carriers/header";

export default function PetCarriers() {
  return (
    <article className="w-[100%]">
      <PetCarriersHeader />
      <div className="pt-2 pb-4">
        <Divider orientation="horizontal" />
      </div>
      <MonitorCards />
      <SearchBar />
      {/* <div className="py-4">
        <PetCarrierSearch />
      </div> */}
      <PetCarriersTable />
    </article>
  );
}
