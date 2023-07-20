import { Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "chartjs-plugin-dragdata"; // Importieren des Plugins

export default function KieslerKreis() {
  const data = {
    labels: [
      ["Dominant", "offen"],
      "",
      ["Freundlich", "Nähe"],
      "",
      ["Unterwürfig", "verschlossen"],
      "",
      ["Feindselig", "Distanziert"],
      "",
    ],
    datasets: [
      {
        label: "Beispiel-Daten",
        data: [, 2, , , , , ,],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        max: 3,
      },
    },
    scales: {
      r: {
        max: 3,
        min: 0,
        stepSize: 1,
      },
    },
    plugins: {
      dragData: {
        round: 1,
        showTooltip: true,
        onDragStart: function (e) {
          // console.log(e)
        },
        onDrag: function (e, datasetIndex, index, value) {
          e.target.style.cursor = "grabbing";
          // console.log(e, datasetIndex, index, value)
        },
        onDragEnd: function (e, datasetIndex, index, value) {
          e.target.style.cursor = "default";
          // console.log(datasetIndex, index, value)
        },
      },
    },
  };

  return (
    <>
      <h2>Kieslerkreis</h2>
      <div style={{ height: "90vh" }}>
        <Radar data={data} options={options} />
      </div>
    </>
  );
}
