"use client";

import Image from "next/image";
import MobileSideBar from "../mobile-side-bar/MobileSideBar";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const NavBarComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="items-center p-5 h-fit  bg-slate-200 flex w-full  justify-between  sticky top-0">
      <MobileSideBar />
      <Image
        className="mx-4 hidden md:flex"
        src={"/logo.svg"}
        alt="logo"
        height={80}
        width={80}
      />

      <div className="w-64">Search</div>
      <Button onClick={handleClick}>
        <Avatar alt="avatar" src="/avatarImage.png" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
export default NavBarComponent;
