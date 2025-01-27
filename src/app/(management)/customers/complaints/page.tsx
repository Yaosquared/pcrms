import { Divider } from "@mui/joy";

import ComplaintsHeader from "@/app/(components)/complaints/header";
import ComplaintSearch from "@/app/(components)/complaints/search-bar";
import ComplaintsTable from "@/app/(components)/complaints/table";

export default function Complaints({
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
      <ComplaintsHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <div className="py-4">
        <ComplaintSearch />
      </div>
      <ComplaintsTable search={search} page={page} />
    </article>
  );
}
