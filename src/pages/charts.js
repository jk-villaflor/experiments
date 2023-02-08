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
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  LinearScale, 
  PointElement, 
  LineElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  annotationPlugin, 
  ChartDataLabels
); //ahhh the long lines at the registry. May it be school or a government facility

export default function TestChart({ minNormal, maxNormal, dataPoints }){

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "First dataset",
          data: dataPoints,
          // data: [51,12,23,59,90,12],
          // fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        },
      ]
    };

      const options = {
        // parsing: false,
        scales:{
          y:{
            title: {display: true, text: "Y in units whatever"}
          },
          x:{
            adapter:{

            },
            title:{display: true, text:"Months in Whatever year"}
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
          },
          tooltip:{
            // callbacks:{
            //   label: function(context){
            //     let label = context.dataset.label;                
            //     if(context.raw > 73.5){
            //       label = "HAHAHA YOU'RE FUCKED NOW!!!!!";
            //     }else if (context.raw < 40){
            //       label = "THAT'S BAD. You're doing well :D";
            //     }
            //     else{
            //       label = context.dataset.raw;
            //     }
            //     return label;
            //   },
            // }
          },
          datalabels: {
            backgroundColor: function(context) {
              return context.dataset.backgroundColor;
            },
            borderRadius: 4,
            color: 'white',
            font: {
              weight: 'bold'
            },
            formatter: Math.round,
            padding: 6
          }
        },
      };

    return(
        <>
        <Line data={data} options={options} />
        </>
    )
}