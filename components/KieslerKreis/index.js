import { Radar } from "react-chartjs-2";
import Chart, { getAnglefFromPoint } from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import styled from "styled-components";
import { useState, useRef } from "react";

const DiagrammContainer = styled.div`
  max-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function KieslerKreis() {
  const [chartData, setChartData] = useState({
    labels: [
      ["Dominant", "Offen"],
      "",
      ["Freundlich", "Nähe"],
      "",
      ["Unterwürfig", "Verschlossen"],
      "",
      ["Feindselig", "Distanziert"],
      "",
    ],
    datasets: [
      {
        type: "radar",
        label: "Daten",
        data: [null, 2, null, null, null, null, null, null],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });

  const options = {
    scales: {
      r: {
        max: 3,
        min: 0,
        stepSize: 1,
      },
    },
    onClick: (event, element) => {
      console.log(event);
      console.log(element);
      console.log(chartData.datasets[0].data);
      const position = getRelativePosition(event);
      const scale = options.scales.r;
      const angle = scale.getAnglefFromPoint(position);
      console.log("angle", angle);
    },
  };

  return (
    <>
      <DiagrammContainer>
        <Radar data={chartData} options={options} />
      </DiagrammContainer>
    </>
  );
}
