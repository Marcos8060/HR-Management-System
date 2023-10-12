import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const RevenueChart = () => {
  const [options, setOptions] = useState({
    data: {
      table: "datatable",
    },
    chart: {
      type: "column",
    },
    title: {
      text: "Total Revenue",
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "Amount",
      },
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: true,
    },
    series: [
      {
        data: [
          ["2016", 100],
          ["2017", 150],
          ["2018", 200],
          ["2019", 180],
          ["2020", 250],
        ],
      },
    ],
  });
  return (
    <section className="my-8 shadow-2xl">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
};

export default RevenueChart;
