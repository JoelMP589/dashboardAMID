
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
            valuesArray1.push(memoramaFound[1].Si);
            valuesArray1.push(memoramaFound[1].No);
            valuesArray2.push(memoramaFound[2].Si);
            valuesArray2.push(memoramaFound[2].No);
            preguntas.push(memoramaFound[1].Texto);
            preguntas.push(memoramaFound[2].Texto);
        }
        setPregunta1({
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
            pregunta: preguntas[0]
        })
        setPregunta2({
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
            pregunta: preguntas[1]
        })

    }, [memoramaFound]);

    return (
        <div className="grid">
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{pregunta1 ? pregunta1.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta1} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{pregunta2 ? pregunta2.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta2} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
        </div>
    )
}
