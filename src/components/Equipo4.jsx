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
            valuesArray.push(JuegoDragDropFound[3].Ganador);
            valuesArray.push(JuegoDragDropFound[3].Perdedor);
            valuesArray1.push(JuegoDragDropFound[0].Ganador);
            valuesArray1.push(JuegoDragDropFound[0].Perdedor);
            valuesArray2.push(JuegoDragDropFound[1].Ganador);
            valuesArray2.push(JuegoDragDropFound[1].Perdedor);
            valuesArray3.push(JuegoDragDropFound[2].Ganador);
            valuesArray3.push(JuegoDragDropFound[2].Perdedor);
            setGeneral({
                labels: labelsArray,
                datasets: [
                    {
                        data: valuesArray,
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
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
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
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
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
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
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        borderWidth: 1,
                    },
                ],

            })
        }
    }, [JuegoDragDropFound])

    return (
        <div className="grid">
            <div className="col-12 xl:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{general ? "Gráfica general" : ''}</p>
                    <Chart type="doughnut" data={general} style={{ position: 'relative', width: '60%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >Gráfica nivel 1</p>
                    <Chart type="doughnut" data={juego1} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >Gráfica nivel 2</p>
                    <Chart type="doughnut" data={juego2} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >Gráfica nivel 3</p>
                    <Chart type="doughnut" data={juego3} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
        </div>
    )
}
