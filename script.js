const data = [
  { metric: "CPU Usage", value: 0, anomaly: false },
  { metric: "Request Rate", value: 0, anomaly: false },
  { metric: "Error Rate", value: 0, anomaly: false }
];

const tbody = document.getElementById("metrics");

function render() {
  tbody.innerHTML = "";
  data.forEach(m => {
    tbody.innerHTML += `
      <tr>
        <td>${m.metric}</td>
        <td>${m.value}</td>
        <td class="${m.anomaly ? "anomaly" : "normal"}">
          ${m.anomaly ? "Anomaly Detected" : "Normal"}
        </td>
      </tr>
    `;
  });
}

function analyze() {
  data.forEach(m => {
    m.value = Math.floor(Math.random() * 100);
    m.anomaly = m.value > 85;
  });
  render();
}

render();
