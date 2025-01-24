import { Divider } from "@mui/joy";

import RentalsHeader from "@/app/(components)/rentals/header";
import RentalSearch from "@/app/(components)/rentals/search-bar";
import RentalsTable from "@/app/(components)/rentals/table";

export default function Rentals({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const search = searchParams?.search || "";

  return (
    <article className="w-[100%]">
      <RentalsHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <div className="py-4">
        <RentalSearch />
      </div>
      <RentalsTable search={search} />
    </article>
  );
}
