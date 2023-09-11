import React, { useState, ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode; // Specify the type for children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
        <div
          className={`${
            collapsed ? "w-16" : "w-72"
          } h-screen md:block hidden`}
        >
          <Sidebar
            collapsed={collapsed}
            setCollapsed={() => setCollapsed((prev) => !prev)}
          />
        </div>

      <div className="flex-1 overflow-y-auto">
        <Header collapsed={collapsed} />
        <div className="bg-[#DFEAF0]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
