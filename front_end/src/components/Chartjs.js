import React from "react";
import '../App.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    defaults
  } from 'chart.js';
import { Bar } from "react-chartjs-2"; 
  

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
// defaults.plugins.legend.position = 'bottom'
let delayed;
const BarChart = ({values,value,count}) => {
    return (
        <div className="myChart" style={{marginTop:"50px",backgroundColor:"rgba(240, 248, 255,0.8)"}}>
            <Bar
            data={{
                labels: ['Cards', 'Loans', 'Savings', 'Banking', 'Zoomerskool'],
                datasets:[
                    {
                        label: 'Offsite',
                        data: values,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1,
                    },
                    {
                        label: 'Onsite',
                        data: value,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1,
                    }
                ]
            }} 
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `Total Employees ${count}`,
                    },
                    legend: {
                        position: 'bottom',
                        labels:{
                            color: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                        }
                    }

                },
                scales:{
                    x: {
                        grid:{
                            display:false,
                        }
                    },
                    y:{
                        grid:{
                            display:false
                        }
                    }
                },
                animation: {
                    onComplete: () => {
                      delayed = true;
                    },
                    delay: (context) => {
                      let delay = 0;
                      if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 400 + context.datasetIndex * 200;
                      }
                      return delay;
                    },
                  },
            }}

            
            />
        </div>
    )
}

export default BarChart;