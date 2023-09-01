import { Grid, Container } from "@mui/material";
import React from "react";
import { dashboardData } from "@/assets/utils/menu";
import RevenueChart from "./charts/revenue-chart";
import SalesChart from "./charts/sales-chart";
import Statistics from "./statistics";
import Tables from "./tables";

const Admin = () => {
  return (
    <Container maxWidth="xl" className="py-4">
      <h1 className="text-xl mb-4">Welcome Admin</h1>
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
  );
};

export default Admin;
