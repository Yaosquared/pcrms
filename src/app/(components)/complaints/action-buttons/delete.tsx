"use client";

import { useState } from "react";

import { MdDelete } from "react-icons/md";
import { Modal, Box } from "@mui/material";

import ComplaintDeleteForm from "../delete-form";

const DeleteButton = ({ id, name }: { id: string; name: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    border: "none",
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
        <Box p={4} sx={style}>
          <ComplaintDeleteForm id={id} name={name} handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default DeleteButton;
