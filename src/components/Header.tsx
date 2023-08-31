import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Drawer } from "./Drawer";

type props = {
  collapsed: boolean;
};

const Header = ({ collapsed }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [show, setShow] = useState(false);

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
      <section className="flex justify-between sm:px-8 px-2 py-4 sticky top-0 z-50 shadow-xl bg-primary text-white">
        <div className="">
          <h1 className="text-xl">Main Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="md:hidden block">
            <AiOutlineMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
            <Drawer {...{ isOpen, setIsOpen, collapsed }} />
          </div>
          <img
            onClick={() => setShow((prev) => !prev)}
            className="w-10 h-10 rounded-full cursor-pointer"
            src="/images/me.png"
            alt=""
          />
        </div>
        {show && (
          <div className="bg-white px-2 space-y-2 py-4 shadow-2xl absolute top-14 sm:right-10 right-4 rounded w-24 h-28 text-black">
            <p className="">Profile</p>
            <p className="">Logout</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Header;
