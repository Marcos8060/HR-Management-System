import React, { useState, ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";



interface LayoutProps {
  children: ReactNode; // Specify the type for children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div
        className={`${
          collapsed ? "w-16" : "w-64"
        } h-screen md:block hidden bg-white`}
      >
        <Sidebar
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Header collapsed={collapsed} />
        <div className=" p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
