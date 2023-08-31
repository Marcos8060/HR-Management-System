// components/defaultNavItems.tsx
import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";


const menus = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Statistics",
    href: "/statistics",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Sector",
    href: "/sector",
    icon: <UserGroupIcon className="w-6 h-6" />,
    children: [
      {
        label: "Fintech",
        href: "/dashboard/sector/fintech",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Health",
        href: "/dashboard/sector/health",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Agriculture",
        href: "/dashboard/sector/agriculture",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
    ],
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
    ]
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
];


export default menus;
