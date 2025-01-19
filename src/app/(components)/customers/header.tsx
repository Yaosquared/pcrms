"use client";

import { useState } from "react";
import Link from "next/link";

import { Drawer, Box } from "@mui/material";
import { FaFileCircleExclamation } from "react-icons/fa6";

import NewButton from "./action-buttons/new";

const CustomersHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Customers
      </h2>
      <div className="flex flex-row text-xs lg:text-base font-medium space-x-2">
        <NewButton />
        <button className="rounded-md p-2  lg:px-4 lg:py-3 bg-green-600 hover:bg-green-700 text-white shadow-md">
          <Link href="/customers/complaints">
            <div className="flex flex-row items-center lg:space-x-2">
              <FaFileCircleExclamation size={20} />
              <span className="hidden lg:block lg:text-sm 2xl:text-base">
                Complaint
              </span>
            </div>
          </Link>
        </button>
      </div>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <h1>hello world</h1>
        </Box>
      </Drawer>
    </div>
  );
};

export default CustomersHeader;
