"use client";

import { useState, createContext, Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import { Modal, Box } from "@mui/material";
import { RxAvatar } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { RiDashboardFill } from "react-icons/ri";
import { IoBag } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { FaClipboardList, FaCreditCard } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

import Footer from "./footer";
import SignOut from "../(auth)/sign-out/page";

interface NavLinkProps {
  href: string;
  label: string;
  icon: JSX.Element;
}

const navLinks: NavLinkProps[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <RiDashboardFill size={20} />,
  },
  { href: "/pet-carriers", label: "Pet Carriers", icon: <IoBag size={20} /> },
  { href: "/customers", label: "Customers", icon: <MdPeopleAlt size={20} /> },
  { href: "/rentals", label: "Rentals", icon: <FaClipboardList size={20} /> },
  { href: "/payments", label: "Payments", icon: <FaCreditCard size={20} /> },
  { href: "/settings", label: "Settings", icon: <IoSettings size={20} /> },
];

export const ModalContext = createContext<Dispatch<
  SetStateAction<boolean>
> | null>(null);

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleLinkClick = () => {
    setDrawerOpen(false);
  };

  const isActive = (path: string) => pathname.startsWith(path);

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
    <header className="w-[100%] flex justify-between px-5 text-white bg-blue-600">
      <nav className="flex items-center space-x-1">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          disableRipple={true}
        >
          <div className="flex flex-row items-center space-x-2 p-2">
            <SlMenu size={20} />
            <h1 className="text-lg lg:text-xl 2xl:text-2xl font-semibold">
              PCRMS
            </h1>
          </div>
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          PaperProps={{
            className:
              "w-[50%] md:w-[25%] lg:w-[20%] 2xl:w-[16%] dark:bg-[#121212] justify-between",
          }}
        >
          <div>
            <div className="w-[100%] flex items-center space-x-1 px-5 bg-blue-600 text-white">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(false)}
                disableRipple={true}
              >
                <div className="flex flex-row items-center space-x-2 p-2">
                  <SlMenu size={20} />
                  <h1 className="text-lg lg:text-xl 2xl:text-2xl font-semibold">
                    PCRMS
                  </h1>
                </div>
              </IconButton>
            </div>
            <div className="flex flex-col p-4">
              <ul className="space-y-4">
                {navLinks.map((link: NavLinkProps) => (
                  <li key={link.href} className="group">
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`flex items-center space-x-2 p-2 rounded-md ${
                        isActive(link.href)
                          ? "text-blue-700 bg-accent"
                          : "text-gray-500 dark:text-gray-300 hover:text-blue-600 hover:bg-accent"
                      }`}
                    >
                      <div className="flex flex-row items-center gap-3">
                        {link.icon}
                        <span className="text-sm lg:text-base 2xl:text-lg">
                          {link.label}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Footer />
        </SwipeableDrawer>
      </nav>
      <div className="flex items-center">
        <RxAvatar
          size={40}
          onClick={handleOpen}
          className="2xl:w-10 2xl:h-10 cursor-pointer"
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
            <ModalContext.Provider value={setIsModalOpen}>
              <SignOut />
            </ModalContext.Provider>
          </Box>
        </Modal>
      </div>
    </header>
  );
}
