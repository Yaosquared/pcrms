import { Divider } from "@mui/joy";

import PaymentsHeader from "@/app/(components)/payments/header";
import PaymentSearch from "@/app/(components)/payments/search-bar";
import PaymentsTable from "@/app/(components)/payments/table";

export default function Payments({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const search = searchParams?.search || "";

  return (
    <article className="w-[100%]">
      <PaymentsHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <div className="py-4">
        <PaymentSearch />
      </div>
      <PaymentsTable search={search} />
    </article>
  );
}
