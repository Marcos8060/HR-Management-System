import React from "react";
import Clients from "./clients";
import { Grid } from "@mui/material";
import Projects from "./projects";

const Tables = () => {
  return (
    <>
      {/* <section className="my-4 space-y-8">
        <Clients />
        <Projects />
      </section> */}
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item md={6} xs={12}>
          <Clients />
        </Grid>
        <Grid item md={6} xs={12}>
          <Projects />
        </Grid>
      </Grid>
    </>
  );
};

export default Tables;
