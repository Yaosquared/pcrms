"use client";

import { useState } from "react";

import { MdDelete } from "react-icons/md";
import { Modal, Box } from "@mui/material";
import { toast } from "react-hot-toast";

import PetCarrierDeleteForm from "../delete-form";
import { deleteRecord } from "../actions";

const DeleteButton = ({ id, name }: { id: string; name: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const clientAction = async (formData: FormData) => {
    const result = await deleteRecord(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Pet carrier record deleted");
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 6,
    borderRadius: 2,
    border: "none",
    outline: "none",
  };

  return (
    <>
      <MdDelete
        title="Delete"
        size={20}
        onClick={handleOpen}
        className="text-red-600 hover:text-red-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
      />
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="Delete button"
        aria-describedby="Delete pet carrier record?"
      >
        <Box
          sx={style}
          className="dark:bg-[#121212] w-[80%] md:w-[50%] lg:w-[40%] xl:w-[25%]"
        >
          <PetCarrierDeleteForm
            id={id}
            name={name}
            clientAction={clientAction}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
};

export default DeleteButton;
