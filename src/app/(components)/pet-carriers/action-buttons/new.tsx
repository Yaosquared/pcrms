"use client";

import { useState } from "react";

import { FiPlus } from "react-icons/fi";
import { Drawer, Box } from "@mui/material";

import PetCarrierNewForm from "@/app/(components)/pet-carriers/new-form";

const NewButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = () => setIsDrawerOpen(true);
  const handleClose = () => setIsDrawerOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex flex-row items-center rounded-md p-2 lg:space-x-1 xl:px-4 xl:py-3 bg-blue-600 hover:bg-blue-700 text-white shadow-md"
      >
        <FiPlus size={20} />
        <span className="hidden lg:block lg:text-sm 2xl:text-base">
          Add New
        </span>
      </button>
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleClose}>
        <div className="bg-blue-600 w-[100%] h-[3.75rem] xl:h-16"></div>
        <Box
          p={4}
          textAlign="center"
          role="presentation"
          sx={{
            width: {
              xs: 400,
              sm: 600,
              md: 600,
              lg: 600,
              xl: 700,
            },
          }}
        >
          <PetCarrierNewForm handleClose={handleClose} />
        </Box>
      </Drawer>
    </>
  );
};

export default NewButton;
