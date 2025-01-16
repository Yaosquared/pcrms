import { Divider } from "@mui/joy";

import SearchBar from "@/app/ui/search-bar";
import SettingsTable from "@/app/(components)/settings/table";

export default function Settings() {
  return (
    <article className="w-[100%]">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Settings
      </h2>
      <div className="pt-2">
        <Divider orientation="horizontal" />
      </div>
      <SearchBar />
      <SettingsTable />
    </article>
  );
}
