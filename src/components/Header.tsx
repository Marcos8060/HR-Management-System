import React, { useState, useRef, useEffect,useContext } from "react";
import { AiOutlineMenu, AiOutlineDown,AiOutlineUp } from "react-icons/ai";
import { Drawer } from "./Drawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { authContext } from "@/pages/auth/context";

type props = {
  collapsed: boolean;
};

const Header = ({ collapsed }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { user } = useContext(authContext);

  console.log("CONTEXT_USER ",user);
  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navRef = useRef<boolean>();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="flex justify-between sm:px-8 px-2 py-4 sticky top-0 z-50 shadow-xl bg-white">
        <div className="">
          <h1 className="text-xl">HR Management System</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="md:hidden block">
            <AiOutlineMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
            <Drawer {...{ isOpen, setIsOpen, collapsed }} />
          </div>
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              src="/images/me.png"
              alt=""
            />
            <p>{user?.username}</p>
            <AiOutlineDown className="cursor-pointer" onClick={handleClick} />
          </div>
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
      </section>
    </>
  );
};

export default Header;
