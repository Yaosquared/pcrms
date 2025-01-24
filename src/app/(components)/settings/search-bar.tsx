"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounceCallback } from "usehooks-ts";

const SettingSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebounceCallback((searchValue: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchValue) {
      params.set("search", searchValue);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-[100%] flex items-center border rounded-md shadow-sm pr-1 text-foreground text-sm lg:text-base focus-within:border-2 focus-within:border-blue-600">
      <input
        type="search"
        name="carrier-search"
        placeholder="Search for setting by code..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
        className="h-11 w-[100%] px-3 py-2 rounded-l-md bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default SettingSearch;
