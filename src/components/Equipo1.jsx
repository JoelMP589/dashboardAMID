
import { DashboardContext } from '../Context/DashboardContext'
import { Chart } from 'primereact/chart';
import { useCollectionData } from "react-firebase-hooks/firestore";
import React, { useContext, useEffect, useState } from 'react';

export const Equipo1 = () => {
    const { memoramaRef } = useContext(DashboardContext);
    /* const [jugadores, setJugadores] = useState(); */
    const [pregunta1, setPregunta1] = useState();
    const [pregunta2, setPregunta2] = useState();
    const [memoramaFound] = useCollectionData(memoramaRef, {
        idField: "id",
    });

    useEffect(() => {
        let labelsArray = [];
        let preguntas = [];
        let valuesArray1 = [];
        let valuesArray2 = [];
        if (memoramaFound) {
            console.log(memoramaFound);
            labelsArray.push("De acuerdo");
            labelsArray.push("En desacuerdo");
            valuesArray1.push(memoramaFound[0].Si);
            valuesArray1.push(memoramaFound[0].No);
            valuesArray2.push(memoramaFound[1].Si);
            valuesArray2.push(memoramaFound[1].No);
            preguntas.push(memoramaFound[0].Texto);
            preguntas.push(memoramaFound[1].Texto);
        }
        setPregunta1({
            labels: labelsArray,
            datasets: [
                {
                    data: valuesArray1,
                    backgroundColor: [
                        "#1DEED5",
                        "#EE1D40",
                    ],
                    hoverBackgroundColor: [
                        "#1DEED5",
                        "#EE1D40",
                    ],
                    borderWidth: 1,
                },
            ],
            pregunta: preguntas[0]
        })
        setPregunta2({
            labels: labelsArray,
            datasets: [
                {
                    data: valuesArray2,
                    backgroundColor: [
                        "#1DEED5",
                        "#EE1D40",
                    ],
                    hoverBackgroundColor: [
                        "#1DEED5",
                        "#EE1D40",
                    ],
                    borderWidth: 1,
                },
            ],
            pregunta: preguntas[1]
        })

    }, [memoramaFound]);

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
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta1 ? pregunta1.pregunta : ''}</p>
                    <Chart type="doughnut" options={lightOptions} data={pregunta1} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta2 ? pregunta2.pregunta : ''}</p>
                    <Chart type="doughnut" options={lightOptions} data={pregunta2} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
        </div>
    )
}
