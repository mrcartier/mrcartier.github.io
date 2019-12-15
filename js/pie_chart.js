new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
      labels: ["IT Strategy/Vision", "Project Management", "Development", "Technology Analysis/Research"],
      datasets: [{
        label: "average time",
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#000000"],
        data: [30, 40, 30, 20]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Average Time Spent'
      }
    }
});