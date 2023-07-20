import { Radar } from "react-chartjs-2";
import ChartJs from "chart.js";
import styled from "styled-components";
import { useState, useRef } from "react";

const DiagrammContainer = styled.div`
  max-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function KieslerKreis() {
  const chartRef = useRef();
  const [chartData, setChartData] = useState({
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
        label: "Daten",
        data: [null, null, null, null, null, null, null, null],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });

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
    onClick: (event) => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.chartInstance;
        const position = ChartJs.helpers.getRelativePosition(
          event,
          chartInstance
        );
        const scale = chartInstance.scales.r;
        const angle = scale.getAngleFromPoint(position);
        const index = Math.round((angle.angle - Math.PI / 2) / (Math.PI / 4));
        const value = scale.getValueForPixel(
          Math.sqrt(
            Math.pow(position.x - scale.xCenter, 2) +
              Math.pow(position.y - scale.yCenter, 2)
          )
        );
        setChartData((prevData) => ({
          ...prevData,
          datasets: prevData.datasets.map((dataset) => ({
            ...dataset,
            data:
              dataset.data[index] === null
                ? dataset.data.map((v, i) => (i === index ? value : v))
                : dataset.data.map((v) => null),
          })),
        }));
      }
    },
  };

  return (
    <>
      <DiagrammContainer>
        <Radar ref={chartRef} data={chartData} options={options} />
      </DiagrammContainer>
    </>
  );
}
