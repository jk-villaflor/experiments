import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    CategoryScale,
  } from 'chart.js';
import { Scatter, Line } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, CategoryScale);

export default function TestChart({ props }){

    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "First dataset",
          data: [33, 53, 85, 41, 44, 39],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        },
        {
          label: "Min",
          data: [80,80,80,80,80,80],
          fill: false,
          pointRadius: 0,
          borderColor: "#E83845",
          backgroundColor: "#E83845"
        },
        {
          label: "Max",
          data: [40, 40, 40, 40, 40, 40],
          fill: false,
          pointRadius: 0,
          borderColor: "#E83845",
          backgroundColor: "#E83845"
        }
      ]
    };

      const options = {
        responsive: true,
        plugins: {
          // legend: {
          //   position: 'top' as const,
          // },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };

    return(
        <>
        <Line data={data} options={options} />
        </>
    )
}