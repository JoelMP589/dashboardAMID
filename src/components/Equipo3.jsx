import React, { useContext, useEffect, useState } from 'react'
import { Chart } from 'primereact/chart';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { DashboardContext } from '../Context/DashboardContext';

export const Equipo3 = () => {
    const { JuegoOpMultipleRef } = useContext(DashboardContext);
    const [general, setGeneral] = useState();
    const [pregunta1, setPregunta1] = useState();
    const [pregunta2, setPregunta2] = useState();
    const [pregunta3, setPregunta3] = useState();
    const [pregunta4, setPregunta4] = useState();
    const [pregunta5, setPregunta5] = useState();
    const [pregunta6, setPregunta6] = useState();
    const [pregunta7, setPregunta7] = useState();
    const [pregunta8, setPregunta8] = useState();
    const [pregunta9, setPregunta9] = useState();
    const [pregunta10, setPregunta10] = useState();
    const [JuegoOpMultipleFound] = useCollectionData(JuegoOpMultipleRef, {
        idField: "id",
    });

    useEffect(() => {
        let labelsArray = [];
        let valuesArray = [];
        let labelsArray1 = [];
        let valuesArray1 = [];
        let valuesArray2 = [];
        let valuesArray3 = [];
        let valuesArray4 = [];
        let valuesArray5 = [];
        let valuesArray6 = [];
        let valuesArray7 = [];
        let valuesArray8 = [];
        let valuesArray9 = [];
        let valuesArray10 = [];
        let pregunta1;
        let pregunta2;
        let pregunta3;
        let pregunta4;
        let pregunta5;
        let pregunta6;
        let pregunta7;
        let pregunta8;
        let pregunta9;
        let pregunta10;
        if (JuegoOpMultipleFound) {
            console.log(JuegoOpMultipleFound);
            labelsArray.push("Ganador");
            labelsArray.push("Perdedor");
            valuesArray.push(JuegoOpMultipleFound[10].Ganador);
            valuesArray.push(JuegoOpMultipleFound[10].Perdedor);
            labelsArray1.push("Opcion A");
            labelsArray1.push("Opcion B");
            labelsArray1.push("Opcion C");
            valuesArray1.push(JuegoOpMultipleFound[0].OpcionA);
            valuesArray1.push(JuegoOpMultipleFound[0].OpcionB);
            valuesArray1.push(JuegoOpMultipleFound[0].OpcionC);
            valuesArray10.push(JuegoOpMultipleFound[1].OpcionA);
            valuesArray10.push(JuegoOpMultipleFound[1].OpcionB);
            valuesArray10.push(JuegoOpMultipleFound[1].OpcionC);
            valuesArray2.push(JuegoOpMultipleFound[2].OpcionA);
            valuesArray2.push(JuegoOpMultipleFound[2].OpcionB);
            valuesArray2.push(JuegoOpMultipleFound[2].OpcionC);
            valuesArray3.push(JuegoOpMultipleFound[3].OpcionA);
            valuesArray3.push(JuegoOpMultipleFound[3].OpcionB);
            valuesArray3.push(JuegoOpMultipleFound[3].OpcionC);
            valuesArray4.push(JuegoOpMultipleFound[4].OpcionA);
            valuesArray4.push(JuegoOpMultipleFound[4].OpcionB);
            valuesArray4.push(JuegoOpMultipleFound[4].OpcionC);
            valuesArray5.push(JuegoOpMultipleFound[5].OpcionA);
            valuesArray5.push(JuegoOpMultipleFound[5].OpcionB);
            valuesArray5.push(JuegoOpMultipleFound[5].OpcionC);
            valuesArray6.push(JuegoOpMultipleFound[6].OpcionA);
            valuesArray6.push(JuegoOpMultipleFound[6].OpcionB);
            valuesArray6.push(JuegoOpMultipleFound[6].OpcionC);
            valuesArray7.push(JuegoOpMultipleFound[7].OpcionA);
            valuesArray7.push(JuegoOpMultipleFound[7].OpcionB);
            valuesArray7.push(JuegoOpMultipleFound[7].OpcionC);
            valuesArray8.push(JuegoOpMultipleFound[8].OpcionA);
            valuesArray8.push(JuegoOpMultipleFound[8].OpcionB);
            valuesArray8.push(JuegoOpMultipleFound[8].OpcionC);
            valuesArray9.push(JuegoOpMultipleFound[9].OpcionA);
            valuesArray9.push(JuegoOpMultipleFound[9].OpcionB);
            valuesArray9.push(JuegoOpMultipleFound[9].OpcionC);
            pregunta1 = JuegoOpMultipleFound[0].Texto;
            pregunta10 = JuegoOpMultipleFound[1].Texto;
            pregunta2 = JuegoOpMultipleFound[2].Texto;
            pregunta3 = JuegoOpMultipleFound[3].Texto;
            pregunta4 = JuegoOpMultipleFound[4].Texto;
            pregunta5 = JuegoOpMultipleFound[5].Texto;
            pregunta6 = JuegoOpMultipleFound[6].Texto;
            pregunta7 = JuegoOpMultipleFound[7].Texto;
            pregunta8 = JuegoOpMultipleFound[8].Texto;
            pregunta9 = JuegoOpMultipleFound[9].Texto;
        }
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
        setPregunta1({
            labels: labelsArray1,
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
            pregunta: pregunta1
        })
        setPregunta2({
            labels: labelsArray1,
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
            pregunta: pregunta2
        })
        setPregunta3({
            labels: labelsArray1,
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
            pregunta: pregunta3
        })
        setPregunta4({
            labels: labelsArray1,
            datasets: [
                {
                    data: valuesArray4,
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
            pregunta: pregunta4
        })
        setPregunta5({
            labels: labelsArray1,
            datasets: [
                {
                    data: valuesArray5,
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
            pregunta: pregunta5
        })
        setPregunta6({
            labels: labelsArray1,
            datasets: [
                {
                    data: valuesArray6,
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
            pregunta: pregunta6
        })
        setPregunta7({
            labels: labelsArray1,
            datasets: [
                {
                    data: valuesArray7,
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
            pregunta: pregunta7
        })
        setPregunta8({
            labels: labelsArray1,
            datasets: [
                {
                    data: valuesArray8,
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
            pregunta: pregunta8
        })
        setPregunta9({
            labels: labelsArray1,
            datasets: [
                {
                    data: valuesArray9,
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
            pregunta: pregunta9
        })
        setPregunta10({
            labels: labelsArray1,
            datasets: [
                {
                    data: valuesArray10,
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
            pregunta: pregunta10
        })
    }, [JuegoOpMultipleFound]);

    return (
        <div className="grid">
            <div className="col-12 xl:col-12 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{general ? "Gráfica general" : ''}</p>
                    <Chart type="doughnut" data={general} style={{ position: 'relative', width: '50%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta1 ? pregunta1.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta1} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta2 ? pregunta2.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta2} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta3 ? pregunta3.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta3} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta4 ? pregunta4.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta4} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta5 ? pregunta5.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta5} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta6 ? pregunta6.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta6} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta7 ? pregunta7.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta7} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta8 ? pregunta8.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta8} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta9 ? pregunta9.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta9} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-12 xl:col-6 sm:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-sm md:text-lg sm:text-sm m-0" >{pregunta10 ? pregunta10.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta10} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
        </div>
    )
}
