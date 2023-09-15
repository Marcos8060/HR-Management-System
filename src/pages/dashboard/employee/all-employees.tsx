import EmployeesDataGrid from "@/components/dashboard/employees/employees-datagrid";
import ProtectedRoute from "@/assets/utils/hoc/protected-route";
import React from "react";
import Layout from "@/components/Layout";
import { Container } from "@mui/material";
import Head from "next/head";
import AuthGuard from "@/assets/utils/hoc/auth-guard";

const title = "All Employees";

const AllEmployees = () => {
  return (
    <>
      <Head>{title}</Head>
      <Container maxWidth="xl" className="py-6 space-y-8">
        <h1 className="text-2xl">{title}</h1>
        <EmployeesDataGrid />
      </Container>
    </>
  );
};

AllEmployees.getLayout = (page: React.ReactNode) => (
  // <AuthGuard>
    <Layout>{page}</Layout>
  // </AuthGuard>
);

export default AllEmployees;
