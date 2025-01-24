"use client";

import { useState } from "react";

import { FiPlus } from "react-icons/fi";
import { Drawer, Box } from "@mui/material";
import { toast } from "react-hot-toast";

import PetCarrierNewForm from "@/app/(components)/pet-carriers/new-form";
import { createRecord } from "../actions";

const NewButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = () => setIsDrawerOpen(true);
  const handleClose = () => setIsDrawerOpen(false);

  const clientAction = async (formData: FormData) => {
    const result = await createRecord(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Pet carrier record added");
    }
  };

  const style = {
    width: {
      xs: 400,
      sm: 600,
      md: 600,
      lg: 600,
      xl: 700,
    },
    p: 4,
  };

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
          textAlign="center"
          role="presentation"
          sx={style}
          className="h-[100%] dark:bg-[#121212]"
        >
          <PetCarrierNewForm
            clientAction={clientAction}
            handleClose={handleClose}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default NewButton;
