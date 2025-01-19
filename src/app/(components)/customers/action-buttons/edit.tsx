"use client";

import { useState } from "react";

import { FaEdit } from "react-icons/fa";
import { Drawer, Box } from "@mui/material";
import { toast } from "react-hot-toast";

import CustomerEditForm from "../edit-form";
import { editRecord } from "../actions";

const EditButton = ({
  id,
  name,
  email,
  phoneNumber,
  birthDate,
  idType,
  idNumber,
}: {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  idType: string;
  idNumber: string;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = () => setIsDrawerOpen(true);
  const handleClose = () => setIsDrawerOpen(false);

  const clientAction = async (formData: FormData) => {
    const result = await editRecord(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Customer record edited");
    }
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
          <CustomerEditForm
            id={id}
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            birthDate={birthDate}
            idType={idType}
            idNumber={idNumber}
            clientAction={clientAction}
            handleClose={handleClose}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default EditButton;
