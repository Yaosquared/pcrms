import { Divider } from "@mui/joy";

import SearchBar from "@/app/ui/search-bar";

import CustomersHeader from "@/app/(components)/customers/header";
import CustomersTable from "@/app/(components)/customers/table";

export default function Customers() {
  return (
    <article className="w-[100%]">
      <CustomersHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <SearchBar />
      <CustomersTable />
    </article>
  );
}
