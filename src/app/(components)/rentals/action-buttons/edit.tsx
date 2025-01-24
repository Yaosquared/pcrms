"use client";

import { useState } from "react";

import { FaEdit } from "react-icons/fa";
import { Drawer, Box } from "@mui/material";
import { toast } from "react-hot-toast";

import RentalEditForm from "../edit-form";
import { editRecord } from "../actions";

const EditButton = ({
  id,
  carrierName,
  customerName,
  petName,
  petType,
  petBreed,
}: {
  id: string;
  carrierName: string;
  customerName: string;
  petName: string;
  petType: string;
  petBreed: string;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = () => setIsDrawerOpen(true);
  const handleClose = () => setIsDrawerOpen(false);

  const clientAction = async (formData: FormData) => {
    const result = await editRecord(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Rental record edited");
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
      <FaEdit
        title="Edit"
        size={20}
        onClick={handleOpen}
        className="text-blue-600 hover:text-blue-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
      />
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleClose}>
        <div className="bg-blue-600 w-[100%] h-[3.75rem] xl:h-16"></div>
        <Box
          textAlign="center"
          role="presentation"
          sx={style}
          className="h-[100%] dark:bg-[#121212]"
        >
          <RentalEditForm
            id={id}
            carrierName={carrierName}
            customerName={customerName}
            petName={petName}
            petType={petType}
            petBreed={petBreed}
            clientAction={clientAction}
            handleClose={handleClose}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default EditButton;
