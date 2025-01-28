import { Divider } from "@mui/joy";

import SettingsHeader from "@/app/components/settings/header";
import SettingSearch from "@/app/components/settings/search-bar";
import SettingsTable from "@/app/components/settings/table";

export default function Settings({
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
      <SettingsHeader />
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <div className="py-4">
        <SettingSearch />
      </div>
      <SettingsTable search={search} page={page} />
    </article>
  );
}
