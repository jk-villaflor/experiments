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
import annotationPlugin from 'chartjs-plugin-annotation';
// const months = Utils;

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, CategoryScale, annotationPlugin);

export default function TestChart({ minNormal, maxNormal }){

  // console.log('props.maxNormal =>',maxNormal);

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "First dataset",
          data: [33, 53, 85, 41, 44, 39],
          // data: [{x: 1, y: 33}, {x: 2.5, y: 54}],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        },
        // {
        //   label: "Min",
        //   data: [80,80,80,80,80,80, 80],
        //   fill: false,
        //   pointRadius: 0,
        //   borderColor: "#E83845",
        //   backgroundColor: "#E83845"
        // },
        // {
        //   label: "Max",
        //   data: [40, 40, 40, 40, 40, 40, 40],
        //   fill: false,
        //   pointRadius: 0,
        //   borderColor: "#E83845",
        //   backgroundColor: "#E83845"
        // }
      ]
    };

      const options = {
        scales:{
          y:{
            title: {display: true, text: "Y in units whatever"}
          },
          x:{
            adapter:{

            },
            title:{display: true, text:"Date"}
          }
        },
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
          annotation:{
            annotations:{
              minLine:{
                type:'line',
                yMin: 40,
                yMax: 40,
                borderColor: "#E83845",
                borderWidth: 2
              },
              maxLine:{
                type:'line',
                yMin: 73.5,
                yMax: 73.5,
                borderColor: "#E83845",
                borderWidth: 2
              }
            }
          }
        },
      };

    return(
        <>
        <Line data={data} options={options} />
        </>
    )
}