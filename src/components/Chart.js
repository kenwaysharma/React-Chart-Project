import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import { useEffect, useState } from "react"


export default function Chart() {
    defaults.animation = false;
    const [dataJson1, setDataJson1] = useState()


    async function fetcher() {
        await fetch("./dummyData.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setDataJson1(data);

            })
    }

    useEffect(() => {
        fetcher()
    }, [])


    const data = {
        labels: [],
        datasets: [
            {
                label: 'Medals',


                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: []
            }
        ]
    }



    if (dataJson1 === undefined) {
        console.log("UNDEFINED HAI!!!!!")
    }
    else {
        dataJson1.map(info => {
            data.labels.push(info.Year);
            data.datasets[0].data.push(info.Medals)

        })
        console.log(data.labels)
    }





    return (
        <div className="chartDiv" >
            <div className="chart">
                <Line
                    data={data}

                    options={{
                        maintainAspectRatio: false,
                        title: { text: 'THICC', display: true },
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Medals Won By India',
                                padding: {
                                    top: 10,
                                    bottom: 30
                                }
                            },
                            legend: {
                                display: false,

                            }
                        },
                        scales: {
                            x: {

                                display: true,
                                offset: true,
                                title: {
                                    display: true,
                                    text: 'Year'
                                },
                                grid: {
                                    display: false
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Medals'
                                },
                                display: true,
                                offset: true,
                            },


                        }

                    }}

                />
            </div>
        </div >


    )
};