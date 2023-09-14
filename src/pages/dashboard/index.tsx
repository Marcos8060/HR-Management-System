import React from "react";
import Layout from "@/components/Layout";
import { useAuth } from "@/assets/hooks/use-auth";
import { Container, Grid } from "@mui/material";

const GeneralDashboard = () => {
  const user = useAuth();

  return (
    <Container maxWidth="xl" className="py-4">
      <h1 className="text-2xl">Welcome {user?.username}</h1>
      <Grid container spacing={4} className="my-4">
        <Grid item md={7} xs={12}>
          <h1 className="text-xl">Today</h1>
          <section className="my-4 space-y-4">
            <div className="bg-white shadow-2xl px-3 py-4 rounded">
              <p>Richard Miles is off sick today</p>
            </div>
            <div className="bg-white shadow-2xl px-3 py-4 rounded">
              <p>You are away today</p>
            </div>
            <div className="bg-white shadow-2xl px-3 py-4 rounded">
              <p>You are working from home today</p>
            </div>
          </section>
        </Grid>
        <Grid item md={5} xs={12}>
          <h1 className="text-xl">Projects</h1>
          <section className="bg-white shadow-2xl rounded p-4 my-4 space-y-8">
            <section className="flex items-center justify-between">
              <div className="w-1/2">
                <p className="text-center font-semibold text-xl">71</p>
                <p className="text-center">Total Tasks</p>
              </div>
              <div className="w-1/2">
                <p className="text-center font-semibold text-xl">14</p>
                <p className="text-center">Pending Tasks</p>
              </div>
            </section>
            <div>
              <p className="text-center font-semibold text-xl">2</p>
              <p className="text-center">Total Projects</p>
            </div>
          </section>
          <section>
            <h1 className="text-xl font-semibold">Your Leave</h1>
            <div className="bg-white p-4 rounded shadow-2xl space-y-4 my-2">
              <section className="flex items-center justify-between">
                <div className="w-1/2">
                  <p className="text-center font-semibold text-xl">4.8</p>
                  <p className="text-center">Leave Taken</p>
                </div>
                <div className="w-1/2">
                  <p className="text-center font-semibold text-xl">12</p>
                  <p className="text-center">Remaining</p>
                </div>
              </section>
              <div className="flex items-center justify-center">
                <button className="bg-primary text-white text-sm px-4 py-2 rounded">
                  Apply Leave
                </button>
              </div>
            </div>
          </section>
        </Grid>
      </Grid>
    </Container>
  );
};

GeneralDashboard.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default GeneralDashboard;
