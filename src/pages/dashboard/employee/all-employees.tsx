import EmployeesDataGrid from "@/components/dashboard/employees/employees-datagrid";
import React from "react";
import Layout from "@/components/Layout";
import { Container } from "@mui/material";
import Head from "next/head";

const title = "All Employees";

const AllEmployees = () => {
  return (
    <>
     <Head>{title}</Head>
      <Container maxWidth="xl" className="py-4 space-y-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <EmployeesDataGrid />
      </Container>
    </>
  );
};

AllEmployees.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default AllEmployees;
