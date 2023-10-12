// components/defaultNavItems.tsx
import React from "react";
import { BiSolidDashboard } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa'
import { AiFillProject } from 'react-icons/ai'
import { SlCalender } from 'react-icons/sl'


export const menus = [
  {
    label: "Dashboard",
    href: "/",
    icon: <BiSolidDashboard />,
    children: [
      {
        label: "Admin Dashboard",
        href: "/dashboard/admin",
      },
      {
        label: "Employee Dashboard",
        href: "/dashboard/employee",
      },
    ],
  },
  {
    label: "Employees",
    href: "/sector",
    icon: <FaUsers />,
    children: [
      {
        label: "All Employees",
        href: "/dashboard/employee/all-employees",
      },
      {
        label: "Holidays",
        href: "/dashboard/sector/health",
      },
      {
        label: "Leaves (Admin)",
        href: "/dashboard/sector/health",
      },
      {
        label: "Leaves (Employee)",
        href: "/dashboard/sector/health",
      },
      {
        label: "Departments",
        href: "/dashboard/sector/agriculture",
      },
    ],
  },
  {
    label: "Clients",
    href: "/dashboard/clients",
    icon: <FaUsers />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <AiFillProject className="w-4 h-4" />,
    children: [
      {
        label: "All Projects",
        href: "/dashboard/projects",
      },
      {
        label: "Approved Projects",
        href: "/dashboard/projects/approved-projects",
      },
      {
        label: "Pending Projects",
        href: "/dashboard/users/approved-users",
      },
    ],
  },
  {
    label: "Calendar",
    href: "/dashboard/calender",
    icon: <SlCalender />,
  },
];



export const dashboardData = [
  {
    label: 'Projects',
    number: 12,
    approved: 49,
    // icon: <HomeIcon className="w-4 h-8" />
  },
  {
    label: 'Tasks',
    number: 37,
    approved: 23,
    // icon: <HomeIcon className="w-4 h-8" />
  },
  {
    label: 'Employees',
    number: 218,
    approved: 49,
    // icon: <HomeIcon className="w-4 h-8" />
  }
]