import { Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styled from "styled-components";

const DiagrammContainer = styled.div`
  max-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
    datasets: [],
  };

  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        max: 3,
        stepSize: 1,
      },
    },
    scales: {
      r: {
        max: 3,
        min: 0,
        stepSize: 1,
      },
    },
  };

  return (
    <>
      <DiagrammContainer>
        <Radar data={data} options={options} />
      </DiagrammContainer>
    </>
  );
}
