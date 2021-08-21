import { graph, xaxis } from "./score";

export const lineChartData = {
  type: "line",
  data: {
    labels: xaxis,
    datasets: [
      {
        label: "Chance to get gold",
        data: graph[0],
        fill: false,
        borderColor: "#C9B037",
        borderWidth: 3,
      },
      {
        label: "Chance to get silver",
        data: graph[1],
        fill: false,
        borderColor: "#B4B4B4",
        borderWidth: 3,
      },
      {
        label: "Chance to get bronze",
        data: graph[2],
        fill: false,
        borderColor: "#AD8A56",
        borderWidth: 3,
      },
      {
        label: "Chance to get ANY medal",
        data: graph[3],
        fill: false,
        borderColor: "#0E2130",
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25,
          },
        },
      ],
    },
  },
};

export default lineChartData;
