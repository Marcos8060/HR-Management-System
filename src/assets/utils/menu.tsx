// components/defaultNavItems.tsx
import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import { PERMISSIONS } from "./permissions";


export const menus = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
    children: [
      {
        label: "Admin Dashboard",
        href: "/dashboard/admin",
        icon: <UserGroupIcon className="w-6 h-6" />,
        permission: PERMISSIONS.DASHBOARD.ACCESS
      },
      {
        label: "Employee Dashboard",
        href: "/dashboard/employee",
        icon: <UserGroupIcon className="w-6 h-6" />,
        permission: PERMISSIONS.DASHBOARD.ACCESS
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
        permission: PERMISSIONS.EMPLOYEES.ACCESS
      },
      {
        label: "Holidays",
        href: "/dashboard/sector/health",
        icon: <UserGroupIcon className="w-6 h-6" />,
        permission: PERMISSIONS.EMPLOYEES.ACCESS
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
        permission: PERMISSIONS.EMPLOYEES.ACCESS

      },
      {
        label: "Departments",
        href: "/dashboard/sector/agriculture",
        icon: <UserGroupIcon className="w-6 h-6" />,
        permission: PERMISSIONS.EMPLOYEES.ACCESS
      },
    ],
  },
  {
    label: "Clients",
    href: "/calendar",
    icon: <UserGroupIcon className="w-6 h-6" />,
    permission: PERMISSIONS.CLIENTS.ACCESS
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FolderIcon className="w-6 h-6" />,
    children: [
      {
        label: "All Projects",
        href: "/dashboard/projects",
        icon: <UserGroupIcon className="w-6 h-6" />,
        permission: PERMISSIONS.PROJECTS.ACCESS
      },
      {
        label: "Approved Projects",
        href: "/dashboard/projects/approved-projects",
        icon: <UserGroupIcon className="w-6 h-6" />,
        permission: PERMISSIONS.PROJECTS.ACCESS
      },
      {
        label: "Pending Projects",
        href: "/dashboard/users/approved-users",
        icon: <UserGroupIcon className="w-6 h-6" />,
        permission: PERMISSIONS.PROJECTS.ACCESS
      },
    ],
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: <CalendarIcon className="w-6 h-6" />,
    permission: PERMISSIONS.PROJECTS.ACCESS
  },
];



export const dashboardData = [
  {
    label: 'Projects',
    number: 12,
    icon: <HomeIcon className="w-6 h-8" />
  },
  {
    label: 'Clients',
    number: 44,
    icon: <HomeIcon className="w-6 h-8" />
  },
  {
    label: 'Tasks',
    number: 37,
    icon: <HomeIcon className="w-6 h-8" />
  },
  {
    label: 'Employees',
    number: 218,
    icon: <HomeIcon className="w-6 h-8" />
  }
]