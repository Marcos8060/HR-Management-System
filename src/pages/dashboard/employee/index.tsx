import React from "react";
import Layout from "@/components/Layout";
import ProtectedRoute from "@/assets/utils/hoc/protected-route";
import { useAuth } from "@/assets/hooks/use-auth";
import AuthGuard from "@/assets/utils/hoc/auth-guard";
import { Container,Grid } from "@mui/material";
import { dashboardData } from "@/assets/utils/menu";
import RevenueChart from "../admin/charts/revenue-chart";
import SalesChart from "../admin/charts/sales-chart";
import Statistics from "../admin/statistics";
import Tables from "../admin/tables";


const Employee = () => {
  const user = useAuth();

  return (
    <ProtectedRoute permission={"ACCESS_EMPLOYEE_DASHBOARD"}>
      <Container maxWidth="xl" className="py-4">
        <h1 className="text-xl mb-4">Welcome {user?.username}</h1>
        <Grid container spacing={2}>
          {dashboardData.map((data, index) => (
            <Grid item md={3} xs={12} key={index}>
              <section className="bg-white shadow-xl rounded flex items-center justify-between py-2 px-4 h-28">
                <div>{data.icon}</div>
                <div className="text-center text-xl">
                  <p className="font-semibold">{data.number}</p>
                  <p>{data.label}</p>
                </div>
              </section>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <RevenueChart />
          </Grid>
          <Grid item md={6} xs={12}>
            <SalesChart />
          </Grid>
        </Grid>
        <Statistics />
        <Tables />
      </Container>
    </ProtectedRoute>
  );
};

Employee.getLayout = (page: React.ReactNode) => (
  <AuthGuard>
    <Layout>{page}</Layout>
  </AuthGuard>
);

export default Employee;
