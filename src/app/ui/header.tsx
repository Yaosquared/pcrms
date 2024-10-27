"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import { RxAvatar } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { RiDashboardFill } from "react-icons/ri";
import { IoBag } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { FaClipboardList, FaCreditCard } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

interface NavLinkProps {
  href: string;
  label: string;
  icon: JSX.Element;
}

// Placeholder for the nav component
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

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

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
              "w-[50%] md:w-[25%] lg:w-[20%] 2xl:w-[16%] dark:bg-[#121212]",
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
                {/* Map through navLinks array and display links in list */}
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
        </SwipeableDrawer>
      </nav>
      <div className="flex items-center">
        <Link href="/" className="cursor-pointer">
          <RxAvatar size={40} className="2xl:w-10 2xl:h-10" />
        </Link>
      </div>
    </header>
  );
}
