import { Divider } from "@mui/joy";

import SearchBar from "@/app/ui/search-bar";
import RentalsTable from "@/app/(components)/rentals/table";
import RentalsHeader from "@/app/(components)/rentals/header";

export default function Rentals() {
  return (
    <article className="w-[100%]">
      <RentalsHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <SearchBar />
      <RentalsTable />
    </article>
  );
}
