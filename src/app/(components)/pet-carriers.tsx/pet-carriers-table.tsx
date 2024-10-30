"use client";

import { useState } from "react";

import { IoIosCopy } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { messageClick } from "@/app/ui/message";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

interface PetCarrierDataProps {
  id: number;
  name: string;
  deviceStatus: string;
  rentalStatus: string;
  dateAdded: string;
}

// Placeholder data for pet carriers table
const petCarriersData: PetCarrierDataProps[] = [
  {
    id: 1,
    name: "PC1",
    deviceStatus: "Connected",
    rentalStatus: "Rented",
    dateAdded: "May 23, 2024",
  },
  {
    id: 2,
    name: "PC2",
    deviceStatus: "Connected",
    rentalStatus: "Rented",
    dateAdded: "May 23, 2024",
  },
  {
    id: 3,
    name: "PC3",
    deviceStatus: "Connected",
    rentalStatus: "Rented",
    dateAdded: "May 23, 2024",
  },
  {
    id: 4,
    name: "PC4",
    deviceStatus: "Connected",
    rentalStatus: "Rented",
    dateAdded: "May 23, 2024",
  },
  {
    id: 5,
    name: "PC5",
    deviceStatus: "Not Connected",
    rentalStatus: "Not Rented",
    dateAdded: "May 23, 2024",
  },
];

type Anchor = "right";

export default function PetCarriersTable() {
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
    <div className="space-y-4 text-xs lg:text-sm 2xl:text-base">
      <div className="overflow-x-auto">
        <table className="w-[100%] text-left">
          <thead>
            <tr className="border-b-2 whitespace-nowrap">
              <th className="px-1 py-2">Carrier Name</th>
              <th className="px-1">Device Status</th>
              <th className="px-1">Rental Status</th>
              <th className="px-1">Date Added</th>
              <th className="px-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through perCarriersData array and display placeholder data in table */}
            {petCarriersData.map((carrier: PetCarrierDataProps) => (
              <tr
                key={carrier.id}
                className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 cursor-pointer whitespace-nowrap"
              >
                <td className="px-1 py-2">{carrier.name}</td>
                <td className="px-1">{carrier.deviceStatus}</td>
                <td className="px-1">{carrier.rentalStatus}</td>
                <td className="px-1">{carrier.dateAdded}</td>
                <td>
                  <div className="flex flex-row items-center space-x-2 lg:space-x-3">
                    <IoIosCopy
                      size={20}
                      onClick={messageClick}
                      className="text-green-600 hover:text-green-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
                    />
                    <FaEdit
                      size={20}
                      onClick={toggleDrawer("right", true)}
                      className="text-blue-600 hover:text-blue-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
                    />
                    <MdDelete
                      size={20}
                      onClick={messageClick}
                      className="text-red-600 hover:text-red-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
              Edit Pet Carrier Record
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
    </div>
  );
}
