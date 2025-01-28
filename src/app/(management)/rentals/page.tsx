import { Divider } from "@mui/joy";

import RentalsHeader from "@/app/components/rentals/header";
import RentalSearch from "@/app/components/rentals/search-bar";
import RentalsTable from "@/app/components/rentals/table";

export default function Rentals({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    page?: string;
  };
}) {
  const search = searchParams?.search || "";
  const page = searchParams?.page || "";

  return (
    <article className="w-[100%]">
      <RentalsHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <div className="py-4">
        <RentalSearch />
      </div>
      <RentalsTable search={search} page={page} />
    </article>
  );
}
