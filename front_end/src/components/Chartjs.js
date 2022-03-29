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
const BarChart = ({values,value,count,total}) => {
    return (
        <div className="myChart text-dark" style={{marginTop:"50px",backgroundColor:"rgba(240, 248, 255, 0.699)"}}>
            <Bar
            data={ {
                labels: ['Cards', 'Loans', 'Savings', 'Banking', 'Zoomerskool'],
                // fontColor : '#000000',
                datasets:[
                    {
                        label: `Offshore (${total[0]})`,
                        data: values,
                        // fontColor : '#000000',
                        backgroundColor: [
                            '#000000',
                            // 'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            // 'rgba(75, 192, 192, 1)',
                            // 'rgba(153, 102, 255, 1)'
                        ],
                        borderColor: [
                            'rgba(255,159,64,1)',
                            // 'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            // 'rgba(75, 192, 192, 1)',
                            // 'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1,
                    },
                    {
                        label: `Onshore (${total[1]})`,
                        data: value,
                        // fontColor : '#000000',
                        backgroundColor: [
                            '#D2691E',
                            // 'rgba(253, 0, 97, 0.6)',
                            // 'rgba(0, 173, 253, 0.898)',
                            // 'rgba(253, 0, 0, 0.898)',
                            // 'rgba(253, 0, 169, 0.898)'
                        ],
                        borderColor: [
                            'rgb(30, 255, 0)',
                            // 'rgba(253, 0, 97, 0.898)',
                            // 'rgba(0, 173, 253, 0.898)',
                            // 'rgba(253, 0, 0, 0.898)',
                            // 'rgba(253, 0, 169, 0.898)'
                        ],
                        borderWidth: 1,
                    }
                ]
            }} 
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                fontColor : '#000000',
                plugins: {
                    title: {
                        display: true,
                        text: `Total Employees ${count}`,
                        fontColor : '#000000',
                    },
                    legend: {
                        position: 'bottom',
                        labels:{
                            color: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            fontColor : '#000000',
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