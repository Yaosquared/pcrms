import { Divider } from "@mui/joy";

import CustomersHeader from "@/app/components/customers/header";
import CustomerSearch from "@/app/components/customers/search-bar";
import CustomersTable from "@/app/components/customers/table";

export default function Customers({
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
      <CustomersHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <div className="py-4">
        <CustomerSearch />
      </div>
      <CustomersTable search={search} page={page} />
    </article>
  );
}
