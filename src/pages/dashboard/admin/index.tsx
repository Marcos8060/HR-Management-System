import React from "react";
import { Container, Grid } from "@mui/material";
import { AiOutlineRight } from "react-icons/ai";
import Layout from "../../../components/layout";
import ProtectedRoute from "@/assets/utils/hoc/protected-route";

const Dashboard = () => {
  return (
    <ProtectedRoute permission={'ACCESS_ADMIN_DASHBOARD'}>
      <Container maxWidth="xl" className="space-y-1">
        <h1 className="text-xl">Overview</h1>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12} className="">
            <section className="bg-card shadow-xl text-white rounded h-[20vh]">
              <div className="p-2 h-[14vh] space-y-4">
                <p className="text-sm">Next Payout</p>
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-xl">Ksh 3,427</h1>
                  <div className="flex items-center">
                    <p className="text-xs font-thin underline">23 Orders</p>
                    <AiOutlineRight />
                  </div>
                </div>
              </div>
              <div className="bg-cardSecondary rounded-br rounded-bl h-[6vh] p-2 flex items-center justify-between text-xs font-thin">
                <p>Next Payout Date</p>
                <p>Today, 4:00pm</p>
              </div>
            </section>
          </Grid>
          <Grid item md={4} xs={12} className="">
            <section className="bg-white shadow-2xl rounded h-[20vh]">
              <div className="p-2 h-[14vh] space-y-4">
                <p className="text-sm">Amount Pending</p>
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-xl">Ksh 3,427</h1>
                  <div className="flex items-center">
                    <p className="text-xs font-thin underline">23 Orders</p>
                    <AiOutlineRight />
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-br rounded-bl h-[6vh] p-2 flex items-center justify-between text-xs font-thin">
                <p>Next Payout Date</p>
                <p>Today, 4:00pm</p>
              </div>
            </section>
          </Grid>
          <Grid item md={4} xs={12} className="">
            <section className="bg-white shadow-2xl rounded h-[20vh]">
              <div className="p-2 h-[14vh] space-y-4">
                <p className="text-sm">Amount Processed</p>
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-xl">Ksh 3,427</h1>
                  <div className="flex items-center">
                    <p className="text-xs font-thin underline">23 Orders</p>
                    <AiOutlineRight />
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-br rounded-bl h-[6vh] p-2 flex items-center justify-between text-xs font-thin">
                <p>Next Payout Date</p>
                <p>Today, 4:00pm</p>
              </div>
            </section>
          </Grid>
        </Grid>
      </Container>
    </ProtectedRoute>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Dashboard;
