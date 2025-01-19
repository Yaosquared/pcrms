import { Divider } from "@mui/joy";

import SearchBar from "@/app/ui/search-bar";
import PaymentsTable from "@/app/(components)/payments/table";
import PaymentsHeader from "@/app/(components)/payments/header";

export default function Payments() {
  return (
    <article className="w-[100%]">
      <PaymentsHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <SearchBar />
      <PaymentsTable />
    </article>
  );
}
