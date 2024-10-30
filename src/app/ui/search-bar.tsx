"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { messageClick } from "./message";

export default function SearchBar() {
  return (
    <div className="py-4">
      <form className="w-[100%] flex items-center border rounded-md shadow-sm pr-1 text-foreground text-sm lg:text-base focus-within:border-2 focus-within:border-blue-600">
        <input
          type="search"
          placeholder="Search..."
          className="h-11 w-[100%] px-3 py-2 rounded-l-md bg-transparent focus:outline-none"
        />
        <button
          type="button"
          onClick={messageClick}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-md px-3 py-2"
        >
          <FaMagnifyingGlass size={20} />
        </button>
      </form>
    </div>
  );
}
