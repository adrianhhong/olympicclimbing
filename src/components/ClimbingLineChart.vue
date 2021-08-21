<template>
  <div>
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import lineChartData from "../line-chart-data.js";

export default {
  name: "lineChart",
  data() {
    return {
      lineChartData,
    };
  },
  mounted() {
    const ctx = document.getElementById("line-chart");
    new Chart(ctx, this.lineChartData);
  },
};
</script>
