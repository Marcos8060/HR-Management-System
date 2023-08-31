// components/defaultNavItems.tsx
import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon
} from "@heroicons/react/24/outline";

const menus = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
    children: [
      {
        label: "Admin Dashboard",
        href: "/dashboard/admin",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Employee Dashboard",
        href: "/dashboard/employee",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "Employees",
    href: "/sector",
    icon: <UserIcon className="w-6 h-6" />,
    children: [
      {
        label: "All Employees",
        href: "/dashboard/sector/fintech",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Holidays",
        href: "/dashboard/sector/health",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Leaves (Admin)",
        href: "/dashboard/sector/health",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Leaves (Employee)",
        href: "/dashboard/sector/health",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Departments",
        href: "/dashboard/sector/agriculture",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "Employees",
    href: "/sector",
    icon: <UserIcon className="w-6 h-6" />,
    children: [
      {
        label: "All Employees",
        href: "/dashboard/sector/fintech",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Holidays",
        href: "/dashboard/sector/health",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Leaves (Admin)",
        href: "/dashboard/sector/health",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Leaves (Employee)",
        href: "/dashboard/sector/health",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Departments",
        href: "/dashboard/sector/agriculture",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "Clients",
    href: "/calendar",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FolderIcon className="w-6 h-6" />,
    children: [
      {
        label: "All Projects",
        href: "/dashboard/users/all-users",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Approved Projects",
        href: "/dashboard/users/approved-users",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Rejected Projects",
        href: "/dashboard/users/approved-users",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
];

export default menus;
