"use client";

import { useState } from "react";
import Link from "next/link";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Divider } from "@mui/joy";
import { FiPlus, FiMonitor } from "react-icons/fi";

import MonitorCards from "@/app/(components)/pet-carriers.tsx/monitor-cards";
import SearchBar from "@/app/ui/search-bar";
import PetCarriersTable from "@/app/(components)/pet-carriers.tsx/pet-carriers-table";

type Anchor = "right";

export default function PetCarriers() {
  const [state, setState] = useState({
    right: false,
  });

  // Function to activate drawer when a table row is clicked
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <article className="w-[100%]">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
          Pet Carriers
        </h2>
        <div className="flex flex-row text-xs lg:text-base font-medium space-x-2">
          <button
            onClick={toggleDrawer("right", true)}
            className="flex flex-row items-center rounded-md p-2 lg:space-x-1 xl:px-4 xl:py-3 bg-blue-600 hover:bg-blue-700 text-white shadow-md"
          >
            <FiPlus size={20} />
            <span className="hidden lg:block lg:text-sm 2xl:text-base">
              Add New
            </span>
          </button>
          <button className="flex flex-row items-center rounded-md p-2 lg:space-x-2 xl:px-4 xl:py-3 bg-green-600 hover:bg-green-700 text-white shadow-md">
            <Link href="/pet-carriers/monitor">
              <div className="flex flex-row items-center lg:space-x-2">
                <FiMonitor size={20} />
                <span className="hidden lg:block lg:text-sm 2xl:text-base">
                  Monitor
                </span>
              </div>
            </Link>
          </button>
        </div>
      </div>
      <div className="pt-2 pb-4">
        <Divider orientation="horizontal" />
      </div>
      <MonitorCards />
      <SearchBar />
      <PetCarriersTable />

      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
        PaperProps={{
          className:
            "w-[70%] md:w-[40%] lg:w-[35%] 2xl:w-[30%] dark:bg-[#121212]",
        }}
      >
        <div className="px-4 py-10 space-y-10">
          <form className="flex flex-col space-y-4 text-foreground text-sm lg:text-base">
            <h3 className="text-base lg:text-lg 2xl:text-xl font-semibold">
              Add Pet Carrier Record
            </h3>
            <input
              type="text"
              placeholder="Carrier Name"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
            />
            <button
              type="button"
              onClick={toggleDrawer("right", false)}
              className="w-[100%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] xl:w-[20%] bg-blue-600 hover:bg-blue-700 text-white rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm"
            >
              Save
            </button>
          </form>
        </div>
      </SwipeableDrawer>
    </article>
  );
}
