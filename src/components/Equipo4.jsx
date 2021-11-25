import React, { useContext, useEffect, useState } from 'react'
import { Chart } from 'primereact/chart';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { DashboardContext } from "../Context/DashboardContext";

export const Equipo4 = () => {
    const { JuegoDragDropRef } = useContext(DashboardContext);
    const [general, setGeneral] = useState();
    const [juego1, setJuego1] = useState();
    const [juego2, setJuego2] = useState();
    const [juego3, setJuego3] = useState();
    const [JuegoDragDropFound] = useCollectionData(JuegoDragDropRef, {
        idField: "id",
    });

    useEffect(() => {
        let labelsArray = [];
        let valuesArray = [];
        let valuesArray1 = [];
        let valuesArray2 = [];
        let valuesArray3 = [];
        if (JuegoDragDropFound) {
            labelsArray.push("Ganador");
            labelsArray.push("Perdedor");
            valuesArray.push(367);
            valuesArray.push(151);
            valuesArray1.push(386);
            valuesArray1.push(112);
            valuesArray2.push(394);
            valuesArray2.push(121);
            valuesArray3.push(467);
            valuesArray3.push(36);
            /* valuesArray.push(JuegoDragDropFound[3].Ganador);
            valuesArray.push(JuegoDragDropFound[3].Perdedor);
            valuesArray1.push(JuegoDragDropFound[0].Ganador);
            valuesArray1.push(JuegoDragDropFound[0].Perdedor);
            valuesArray2.push(JuegoDragDropFound[1].Ganador);
            valuesArray2.push(JuegoDragDropFound[1].Perdedor);
            valuesArray3.push(JuegoDragDropFound[2].Ganador);
            valuesArray3.push(JuegoDragDropFound[2].Perdedor); */
            setGeneral({
                labels: labelsArray,
                datasets: [
                    {
                        data: valuesArray,
                        backgroundColor: [
                            "#00E63B",
                            "#EE1D40",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#00E63B",
                            "#EE1D40",
                            "#FFCE56"
                        ],
                        borderWidth: 1,
                    },
                ],
            })
            setJuego1({
                labels: labelsArray,
                datasets: [
                    {
                        data: valuesArray1,
                        backgroundColor: [
                            "#00E63B",
                            "#EE1D40",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#00E63B",
                            "#EE1D40",
                            "#FFCE56"
                        ],
                        borderWidth: 1,
                    },
                ],

            })
            setJuego2({
                labels: labelsArray,
                datasets: [
                    {
                        data: valuesArray2,
                        backgroundColor: [
                            "#00E63B",
                            "#EE1D40",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#00E63B",
                            "#EE1D40",
                            "#FFCE56"
                        ],
                        borderWidth: 1,
                    },
                ],

            })
            setJuego3({
                labels: labelsArray,
                datasets: [
                    {
                        data: valuesArray3,
                        backgroundColor: [
                            "#00E63B",
                            "#EE1D40",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#00E63B",
                            "#EE1D40",
                            "#FFCE56"
                        ],
                        borderWidth: 1,
                    },
                ],

            })
        }
    }, [JuegoDragDropFound])

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        }
    };

    return (
        <div className="grid">
            <div className="col-12 xl:col-12 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{general ? "Gráfica general" : ''}</p>
                    <Chart type="doughnut" options={lightOptions} data={general} style={{ position: 'relative', width: '60%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >Gráfica nivel 1</p>
                    <Chart type="doughnut" options={lightOptions} data={juego1} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >Gráfica nivel 2</p>
                    <Chart type="doughnut" options={lightOptions} data={juego2} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >Gráfica nivel 3</p>
                    <Chart type="doughnut" options={lightOptions} data={juego3} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
        </div>
    )
}
