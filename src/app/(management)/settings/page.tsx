import { Divider } from "@mui/joy";

import SettingSearch from "@/app/(components)/settings/search-bar";
import SettingsTable from "@/app/(components)/settings/table";

export default function Settings({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const search = searchParams?.search || "";

  return (
    <article className="w-[100%]">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Settings
      </h2>
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <div className="py-4">
        <SettingSearch />
      </div>
      <SettingsTable search={search} />
    </article>
  );
}
