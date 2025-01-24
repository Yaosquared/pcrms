import { Divider } from "@mui/joy";

import CustomersHeader from "@/app/(components)/customers/header";
import CustomerSearch from "@/app/(components)/customers/search-bar";
import CustomersTable from "@/app/(components)/customers/table";

export default function Customers({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const search = searchParams?.search || "";

  return (
    <article className="w-[100%]">
      <CustomersHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <div className="py-4">
        <CustomerSearch />
      </div>
      <CustomersTable search={search} />
    </article>
  );
}
