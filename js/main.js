const sideNav = document.querySelector("#side-nav");
const toggler = document.querySelector("#toggler");
const texts = document.querySelectorAll(".menu-item-text");
const createGame = document.querySelector("#createGame-form");

function toggleNav() {
  sideNav.classList.toggle("active");
  toggler.classList.toggle("active");
  texts.forEach(text => {
    text.classList.toggle("hidden");
  });
}

function toggleGame() {
  createGame.classList.toggle("active");
}

const ctx = document.querySelector("#myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Thaymãe",
      "Ronan",
      "Victor França",
      "João Paulo",
      "Lucas Freitas"
    ],
    datasets: [
      {
        label: "# de pontos",
        data: [1460, 1340, 1245, 1210, 1186],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)"
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  maintainAspectRatio: false,
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

Chart.defaults.global.responsive = true;
