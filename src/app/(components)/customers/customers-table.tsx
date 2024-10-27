"use client";

import { useState } from "react";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";

interface CustomerDataProps {
  id: number;
  name: string;
  email: string;
  number: string;
  birthdate: string;
  idType: string;
  idNum: string;
  dateRegistered: string;
}

// Placeholder data for settings table
const customersData: CustomerDataProps[] = [
  {
    id: 1,
    name: "Mario",
    email: "mario@gmail.com",
    number: "09876543210",
    birthdate: "April 14, 2002",
    idType: "National ID",
    idNum: "1234567890",
    dateRegistered: "May 23, 2024",
  },
  {
    id: 2,
    name: "Jenson",
    email: "jenson@gmail.com",
    number: "09876543210",
    birthdate: "April 1, 2002",
    idType: "Passport",
    idNum: "1234567890",
    dateRegistered: "May 23, 2024",
  },
  {
    id: 3,
    name: "Al",
    email: "al@gmail.com",
    number: "09876543210",
    birthdate: "June 26, 2001",
    idType: "PRC ID",
    idNum: "1234567890",
    dateRegistered: "May 23, 2024",
  },
  {
    id: 4,
    name: "Christian",
    email: "christian@gmail.com",
    number: "09876543210",
    birthdate: "June 26, 2002",
    idType: "SSS ID",
    idNum: "1234567890",
    dateRegistered: "May 23, 2024",
  },
  {
    id: 5,
    name: "John Loyd",
    email: "johnloyd@gmail.com",
    number: "09876543210",
    birthdate: "Feb 5, 2002",
    idType: "Driver's License",
    idNum: "1234567890",
    dateRegistered: "May 23, 2024",
  },
];

type Anchor = "right";

export default function CustomersTable() {
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
              <th className="px-1 py-2">Customer Name</th>
              <th className="px-1">Email</th>
              <th className="px-1">Number</th>
              <th className="px-1">Birthdate</th>
              <th className="px-1">ID Type</th>
              <th className="px-1">ID Number</th>
              <th className="px-1">Date Registered</th>
              <th className="px-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through customersData array and display placeholder data in table */}
            {customersData.map((customer: CustomerDataProps) => (
              <tr
                key={customer.id}
                className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 cursor-pointer whitespace-nowrap"
              >
                <td className="px-1 py-2">{customer.name}</td>
                <td className="px-1">{customer.email}</td>
                <td className="px-1">{customer.number}</td>
                <td className="px-1">{customer.birthdate}</td>
                <td className="px-1">{customer.idType}</td>
                <td className="px-1">{customer.idNum}</td>
                <td className="px-1">{customer.dateRegistered}</td>
                <td>
                  <div className="flex flex-row items-center space-x-2 lg:space-x-3">
                    <FaEdit
                      size={20}
                      onClick={toggleDrawer("right", true)}
                      className="text-blue-600 hover:text-blue-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
                    />
                    <MdDelete
                      size={20}
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
              Edit Customer Record
            </h3>
            <input
              type="text"
              placeholder="Customer Name"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground focus:outline-blue-600"
            />
            <input
              type="text"
              placeholder="Email"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground focus:outline-blue-600"
            />
            <input
              type="text"
              placeholder="Number"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground focus:outline-blue-600"
            />
            <input
              type="text"
              placeholder="Birthdate"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground focus:outline-blue-600"
            />
            <input
              type="text"
              placeholder="ID Type"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground focus:outline-blue-600"
            />
            <input
              type="text"
              placeholder="ID Number"
              className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground focus:outline-blue-600"
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
