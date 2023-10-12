import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import {menus} from "@/assets/utils/menu";
import MenuChild from './MenuChild';


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <section className="shadow-xl">
        <header className="h-[10vh] shadow flex items-center justify-center font-bold">
          <h1>Logo</h1>
        </header>
        <section className="p-4 h-[90vh] flex flex-col justify-between">
          <div className="h-3/4 overflow-x-auto">
            <ul className="space-y-2 my-4 ">
              {menus.map((menu: any, index: number) => (
                <MenuChild key={index} {...{ index, menu, collapsed }} />
              ))}
            </ul>
          </div>
          <div className="">
            <div className="flex items-center justify-center gap-2 bg-cardSecondary text-white rounded p-2 text-sm">
              <MdLogout className="text-xl" />
              <p>Logout</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Sidebar;
