const color = [
  "rgba(57, 79, 245, 0.8)",
  "rgba(56, 187, 255, 0.52)",
  "rgba(253, 255, 56, 0.98)",
];
const backgroundColor = [
  "rgba(57, 79, 245, 0.8)",
  "rgba(56, 187, 255, 0.52)",
  "rgba(253, 255, 56, 0.98)",
];

// Перший графік
const ctx1 = document.getElementById("chart1").getContext("2d");
const chart1 = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["blala", "blaaa", "blaaa"],
    datasets: [
      {
        label: "Social Events",
        data: [70, 85, 60],
        borderWidth: 3,
        backgroundColor: backgroundColor[0],
      },
      {
        label: "Social Events",
        data: [55, 58, 75],
        borderWidth: 1,
        backgroundColor: backgroundColor[1],
      },
      {
        label: "Social Events",
        data: [50, 55, 53],
        borderWidth: 1,

        backgroundColor: backgroundColor[2],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 50,
          callback: function (value) {
            return value === 0 || value === 50 || value === 100 ? value : "";
          },
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  },
});

// Другий графік
const ctx2 = document.getElementById("chart2").getContext("2d");
const chart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Interactions",
        data: [40, 50, 45, 25, 40, 25, 35, 42, 60],
        borderColor: "rgba(57, 79, 245, 0.8)",
      },
      {
        label: "Interactions",
        data: [28, 58, 30, 19, 26, 37, 20, 58, 30],
        borderColor: "rgba(56, 187, 255, 0.52)",
      },
      {
        label: "Interactions",
        data: [50, 30, 70, 50, 54, 69, 58, 69, 55],
        borderColor: "rgba(253, 255, 56, 0.98)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,

        ticks: {},
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  },
});
