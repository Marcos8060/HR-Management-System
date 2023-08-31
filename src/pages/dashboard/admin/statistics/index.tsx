import { Grid } from "@mui/material";
import React from "react";
import { HiUserCircle } from "react-icons/hi";

const Statistics = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <section className="bg-white shadow-xl rounded p-4">
          <h1 className="text-xl font-semibold">Task Statistics</h1>
          <section className="flex items-center justify-between my-4 text-center">
            <div>
              <h1>Total Tasks</h1>
              <p>30</p>
            </div>
            <div>
              <h1>Overdue Tasks</h1>
              <p>13</p>
            </div>
          </section>
          <section className="flex items-center justify-between">
            <div>
              <p className="text-[#55CE63]">Completed Tasks</p>
              <p className="text-[#FFBC34]">Inprogress Tasks</p>
              <p className="text-[#9368E9]">Onhold Tasks</p>
              <p className="text-[#F62D51]">Pending Tasks</p>
              <p className="text-[#009EFB]">Review Tasks</p>
            </div>
            <div className="text-center">
              <p>20</p>
              <p>20</p>
              <p>20</p>
              <p>20</p>
              <p>20</p>
            </div>
          </section>
        </section>
      </Grid>
      <Grid item md={6} xs={12}>
        <section className="bg-white shadow-xl rounded p-4">
          <h1 className="text-xl font-semibold">
            Today Absent{" "}
            <span className="bg-[#FDE2E7] text-[#E7798E] rounded px-2 py-1">
              4
            </span>
          </h1>
          <section className="md:flex gap-2 items-center">
            <section className="border rounded p-2 my-4 md:w-1/2 w-full">
              <div className="flex items-center gap-4">
                <HiUserCircle className="text-4xl" />
                <span>Martin Lewis</span>
              </div>
              <div className="flex items-center justify-between gap-4 my-2">
                <div>
                  <p className="text-sm">4th Sep 2019</p>
                  <p className="text-sm">Leave Date</p>
                </div>
                <div>
                  <span className="bg-[#E2F6ED] text-[#26AF4D] rounded-xl px-2 py-1 text-sm">
                    Approved
                  </span>
                </div>
              </div>
            </section>
            <section className="border rounded p-2 my-4 md:w-1/2 w-full">
              <div className="flex items-center gap-4">
                <HiUserCircle className="text-4xl" />
                <span>Martin Lewis</span>
              </div>
              <div className="flex items-center justify-between gap-4 my-2">
                <div>
                  <p className="text-sm">4th Sep 2019</p>
                  <p className="text-sm">Leave Date</p>
                </div>
                <div>
                  <span className="bg-[#FDE2E7] text-[#E63C3C] rounded-xl px-2 py-1 text-sm">
                    Pending
                  </span>
                </div>
              </div>
            </section>
          </section>
          <div>
            <button className="bg-primary rounded text-white px-4 py-2 w-full my-2">Load More</button>
          </div>
        </section>
      </Grid>
    </Grid>
  );
};

export default Statistics;
