import { Divider } from "@mui/joy";

import SearchBar from "@/app/ui/search-bar";
import ComplaintsTable from "@/app/(components)/complaints/table";
import ComplaintsHeader from "@/app/(components)/complaints/header";

export default function Complaints() {
  return (
    <article className="w-[100%]">
      <ComplaintsHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <SearchBar />
      <ComplaintsTable />
    </article>
  );
}
