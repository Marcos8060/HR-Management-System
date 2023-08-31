import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { MenuChild } from "./MenuChild";
import menus from "@/assets/utils/menu";

type Props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
};

const Sidebar = ({ collapsed, setCollapsed }: Props) => {

  return (
    <>
      <section className="bg-primary h-screen text-white px-3">
        <div className="h-16 flex items-center justify-between border-b border-yellow">
          {!collapsed && <img className="w-12" src="/images/me.png" alt="" />}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="pl-2 hover:bg-yellow hover:text-black p-1 rounded-full w-10 h-10 flex place-items-center justify-center"
          >
            {collapsed ? (
              <BsChevronDoubleRight className="text-xl" />
            ) : (
              <BsChevronDoubleLeft className="text-xl" />
            )}
          </button>
        </div>
        <ul className="space-y-4 my-4">
          {menus.map((menu, index) => (
            <MenuChild key={index} {...{index,menu,collapsed}} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;




