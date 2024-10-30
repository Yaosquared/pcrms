"use client";

import { useState } from "react";

import { FaCheck } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { messageClick } from "@/app/ui/message";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

interface RentalsDataProps {
  id: number;
  carrierName: string;
  customerName: string;
  petName: string;
  petType: string;
  petBreed: string;
  status: string;
  rentInTime: string;
  rentOutTime: string;
  totalTime: string;
  dateRented: string;
}

// Placeholder data for rentals table
const rentalsData: RentalsDataProps[] = [
  {
    id: 1,
    carrierName: "PC5",
    customerName: "Mario",
    petName: "Cinco",
    petType: "Dog",
    petBreed: "Pomeranian",
    status: "Paid",
    rentInTime: "1:00 PM",
    rentOutTime: "6:00 PM",
    totalTime: "5 hours",
    dateRented: "May 23, 2024",
  },
  {
    id: 2,
    carrierName: "PC1",
    customerName: "Jenson",
    petName: "Uno",
    petType: "Cat",
    petBreed: "Siamese",
    status: "Not Paid",
    rentInTime: "2:00 PM",
    rentOutTime: "",
    totalTime: "",
    dateRented: "May 23, 2024",
  },
  {
    id: 3,
    carrierName: "PC2",
    customerName: "Al",
    petName: "Dos",
    petType: "Cat",
    petBreed: "Spynx",
    status: "Not Paid",
    rentInTime: "3:00 PM",
    rentOutTime: "",
    totalTime: "",
    dateRented: "May 23, 2024",
  },
  {
    id: 4,
    carrierName: "PC3",
    customerName: "Christian",
    petName: "Tres",
    petType: "Dog",
    petBreed: "Poodle",
    status: "Not Paid",
    rentInTime: "4:00 PM",
    rentOutTime: "",
    totalTime: "",
    dateRented: "May 23, 2024",
  },
  {
    id: 5,
    carrierName: "PC4",
    customerName: "John Loyd",
    petName: "Cuarto",
    petType: "Dog",
    petBreed: "Pug",
    status: "Not Paid",
    rentInTime: "5:00 PM",
    rentOutTime: "",
    totalTime: "",
    dateRented: "May 23, 2024",
  },
];

type Anchor = "right";

export default function RentalsTable() {
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
            <tr className="border-b-2 space-x-4 whitespace-nowrap">
              <th className="px-1 py-2">Carrier Name</th>
              <th className="px-1">Customer Name</th>
              <th className="px-1">Pet Name</th>
              <th className="px-1">Pet Type</th>
              <th className="px-1">Pet Breed</th>
              <th className="px-1">Status</th>
              <th className="px-1">Rent In Time</th>
              <th className="px-1">Rent Out Time</th>
              <th className="px-1">Total Time</th>
              <th className="px-1">Date Rented</th>
              <th className="px-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through rentalsData array and display placeholder data in table */}
            {rentalsData.map((rental: RentalsDataProps) => (
              <tr
                key={rental.id}
                className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 cursor-pointer whitespace-nowrap"
              >
                <td className="px-1 py-2">{rental.carrierName}</td>
                <td className="px-1">{rental.customerName}</td>
                <td className="px-1">{rental.petName}</td>
                <td className="px-1">{rental.petType}</td>
                <td className="px-1">{rental.petBreed}</td>
                <td className="px-1">{rental.status}</td>
                <td className="px-1">{rental.rentInTime}</td>
                <td className="px-1">{rental.rentOutTime}</td>
                <td className="px-1">{rental.totalTime}</td>
                <td className="px-1">{rental.dateRented}</td>
                <td>
                  <div className="flex flex-row items-center space-x-2 lg:space-x-3">
                    <FaCheck
                      size={24}
                      onClick={messageClick}
                      className="text-green-600 hover:text-green-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
                    />
                    <FaEdit
                      size={24}
                      onClick={toggleDrawer("right", true)}
                      className="text-blue-600 hover:text-blue-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
                    />
                    <MdDelete
                      size={24}
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
              Edit Rental Record
            </h3>
            <input
              type="text"
              placeholder="Carrier Name"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
            />
            <input
              type="text"
              placeholder="Customer Name"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
            />
            <input
              type="text"
              placeholder="Pet Name"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
            />
            <input
              type="text"
              placeholder="Pet Type"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
            />
            <input
              type="text"
              placeholder="Pet Breed"
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
