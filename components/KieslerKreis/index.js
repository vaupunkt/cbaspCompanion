import { Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styled from "styled-components";
import { useState } from "react";

const DiagrammContainer = styled.div`
  max-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;
const kieslerKreisDescription = [
  {
    title: "Dominant, Offen",
    description:
      "klar, deutlich, selbstsicher, selbstbewusst, durchsetzend, kontrollierend, beharrlich",
  },
  {
    title: "Freundlich-Dominant, Nah-Offen",
    description:
      "selbstbewusst, nett, offen, Führung übernehmend, annehmend, extrovertiert, spontan, menschlich, persönliche Gefühle zeigend",
  },
  {
    title: "Freundlich, Nah",
    description:
      "hilfsbereit, kooperativ, offen, wertschätzend, warm, herzlich, nah, ",
  },
  {
    title: "Freundlich-Unterwürfig, Nah-Verschlossen",
    description:
      "freundlich-untätig, schmeichlerisch, (übertrieben-)lobend, (über)vertrauensvoll, schnell verunsichert, hilfsbedürftig",
  },
  {
    title: "Unterwürfig, Verschlossen",
    description: "demütig, hilflos, klein",
  },
  {
    title: "Feindselig-Unterwürfig, Distanziert-Verschlossen",
    description:
      "zurückgezogen-teilnahmslos, zurückhaltend-übervorsichtig, ängstlich, nervös, hilflos, selbstbeschuldigend, unbeteiligt, falsche Versprechen machend, isoliert, einsam",
  },
  {
    title: "Feindselig, Distanziert",
    description:
      "unfreundlich, übergriffig, streitsüchtig, ablehnend, offene Angriffe, abblocken, kühl",
  },
  {
    title: "Feindselig-Dominant, Distanziert-Offen",
    description:
      "bestrafend, rachsüchtig, überkritisch, belehrend, rivalisierend, nicht zu Wort kommen lassend, Beleidigungen, Vorwürfe/Anschuldigungen, scharfer Ton, angriffslustig",
  },
];

export default function KieslerKreis({
  kieslerkreisDataset,
  editMode,
  analysisKey,
  overviewDataset,
}) {
  const [kieslerkreisData, setKieslerkreisData] = useState(
    kieslerkreisDataset ? JSON.parse(kieslerkreisDataset) : null
  );
  const strengthDescriptions = [
    { number: 1, text: "schwach ausgeprägt" },
    { number: 2, text: "mittlere Ausprägung" },
    { number: 3, text: "stark ausgeprägt" },
  ];
  const chartData = {
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
  };

  if (overviewDataset) {
    chartData.datasets = [
      {
        type: "radar",
        label: "Verhalten",
        data: overviewDataset.averageBehaviorKieslerkreis,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 4,
      },
      {
        type: "radar",
        label: "Gewünschtes Verhalten",
        data: overviewDataset.averageBehaviorChangeKieslerkreis,
        backgroundColor: "rgba(50, 168, 82, 0.2)",
        borderColor: "rgba(50, 168, 82, 1)",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 4,
      },
    ];
  } else {
    chartData.datasets = [
      {
        type: "radar",
        label: "Einschätzung",
        data: kieslerkreisData,
        borderWidth: 2,
        pointRadius: 30,
        pointHoverRadius: 30,
      },
    ];
  }
  if (analysisKey === "behavior") {
    chartData.datasets[0].backgroundColor = "rgba(255, 99, 132, 0.2)";
    chartData.datasets[0].borderColor = "rgba(255, 99, 132, 1)";
  } else if (analysisKey === "behaviorChange") {
    chartData.datasets[0].backgroundColor = "rgba(50, 168, 82, 0.2)";
    chartData.datasets[0].borderColor = "rgba(50, 168, 82, 1)";
  }
  const options = {
    legend: { labels: { color: "#f7f7f7" } },
    scale: { min: 0, max: 3, stepSize: 1 },
    scales: {
      r: {
        max: 3,
        min: 0,
        stepSize: 1,
        grid: {
          circular: true,
          color: ["#f7f7f7", "#f7f7f7", "#f7f7f7"],
          lineWidth: 1.5,
          drawOnChartArea: true,
        },
        gridLines: { color: "#262829" },
        title: { FontColor: "#f7f7f7" },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: { color: "#f7f7f7" },
      },
    },
  };
  if (overviewDataset) {
    options.plugins = {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: false,
      },
    };
  }
  if (editMode) {
    options.plugins = {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    };
    options.onClick = (event, element, chart) => {
      const x = event.x;
      const y = event.y;
      const center = { x: chart.scales.r.xCenter, y: chart.scales.r.yCenter };
      const distance = Math.sqrt(
        Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2)
      );
      const angle = Math.atan2(y - center.y, x - center.x);
      const rScale = chart.scales.r;
      const distanceMax = rScale.getDistanceFromCenterForValue(rScale.max);
      const distanceWidth = distanceMax / 6;
      const distance0 = distanceWidth;
      const distance1 = distanceWidth * 3;
      const distance2 = distanceWidth * 5;
      const distance3 = distanceWidth * 7;

      const value =
        distance < distance0
          ? 0
          : distance >= distance0 && distance < distance1
          ? 1
          : distance >= distance1 && distance < distance2
          ? 2
          : distance >= distance2 && distance < distance3
          ? 3
          : null;

      const getAxisIndex = (angle) => {
        if (angle >= -0.405 && angle < 0.405) return 2;
        if (angle >= 0.405 && angle < 1.215) return 3;
        if (angle >= 1.215 && angle < 2.025) return 4;
        if (angle >= 2.025 && angle < 2.835) return 5;
        if (
          (angle >= 2.835 && angle <= 3.14) ||
          (angle >= -3.14 && angle < -2.835)
        )
          return 6;
        if (angle >= -2.835 && angle < -2.025) return 7;
        if (angle >= -2.025 && angle < -1.215) return 0;
        if (angle >= -1.215 && angle < -0.405) return 1;
      };

      const axisIndex = getAxisIndex(angle);
      let axisPoints = [null, null, null, null, null, null, null, null];
      axisPoints[axisIndex] = value;
      if (value > 0) {
        setKieslerkreisData(axisPoints);
      } else {
        setKieslerkreisData([null, null, null, null, null, null, null, null]);
      }
    };
  }
  if (kieslerkreisData) {
    const strengthOfCategory = kieslerkreisData.findIndex(
      (value) => value !== null
    );
    const strengthDescription = strengthDescriptions.find(
      (strengthDescription) =>
        strengthDescription.number === kieslerkreisData[strengthOfCategory]
    );
    const descriptionText = kieslerKreisDescription[strengthOfCategory];
    if (analysisKey === "behavior") {
    } else if (analysisKey === "behaviorChange") {
    }
    return (
      <>
        <DiagrammContainer>
          <Radar data={chartData} options={options} />
        </DiagrammContainer>
        {descriptionText &&
          (analysisKey === "behavior" ? (
            <p>Dein Verhalten war:</p>
          ) : analysisKey === "behaviorChange" ? (
            <p>So möchtest du handeln:</p>
          ) : (
            ""
          ))}
        <h2>{descriptionText?.title}</h2>
        <p>{strengthDescription?.text}</p>
        <p>{descriptionText?.description}</p>
        <input
          type="hidden"
          name={
            analysisKey === "behavior"
              ? "behaviorKieslerkreis"
              : analysisKey === "behaviorChange"
              ? "behaviorChangeKieslerkreis"
              : null
          }
          value={JSON.stringify(kieslerkreisData)}
        />
      </>
    );
  } else {
    return (
      <DiagrammContainer>
        <Radar data={chartData} options={options} />
      </DiagrammContainer>
    );
  }
}
