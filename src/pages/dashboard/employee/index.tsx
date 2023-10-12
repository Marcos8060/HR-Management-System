import React from "react";
import Layout from "../../../components/layout";
import ProtectedRoute from "@/assets/utils/hoc/protected-route";
import { useAuth } from "@/assets/hooks/use-auth";
import AuthGuard from "@/assets/utils/hoc/auth-guard";
import { Container, Grid } from "@mui/material";
import { dashboardData } from "@/assets/utils/menu";
import RevenueChart from "../admin/charts/revenue-chart";
import SalesChart from "../admin/charts/sales-chart";
import Statistics from "../admin/statistics";
import Tables from "../admin/tables";
import { AiOutlineRight } from "react-icons/ai";


const Employee = () => {
  const user = useAuth();

  return (
    <ProtectedRoute permission={"ACCESS_EMPLOYEE_DASHBOARD"}>
      <Container maxWidth="xl" className="py-4">
        <h1 className="text-xl mb-4">Welcome {user?.username}</h1>
        <Grid container spacing={2}>
          {dashboardData.map((data, index) => (
            <Grid item md={4} xs={12} key={index}>
              <section className={`${index === 1 ? 'bg-white' : 'bg-card text-white'} shadow-xl  rounded h-[20vh]`}>
                <div className="p-2 h-[14vh] space-y-4">
                  <p className="text-sm">{data.label}</p>
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-xl">{data.number}</h1>
                    <div className="flex items-center">
                      <p className="text-xs font-thin underline">{data.approved} Approved</p>
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>
                <div className={`${index === 1 ? 'bg-background' : 'bg-cardSecondary'}  rounded-br rounded-bl h-[6vh] p-2 flex items-center justify-between text-xs font-thin`}>
                  <p>Next Payout Date</p>
                  <p>Today, 4:00pm</p>
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
