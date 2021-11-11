import React, { useContext, useEffect, useState } from "react";
import { Chart } from 'primereact/chart';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { DashboardContext } from "../Context/DashboardContext";

export const Equipo2 = () => {

    const { verdadOFalsoRef } = useContext(DashboardContext);
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
    const [verdadOFalsoFound] = useCollectionData(verdadOFalsoRef, {
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
        if (verdadOFalsoFound) {
            labelsArray.push(verdadOFalsoFound[0].id);
            labelsArray.push(verdadOFalsoFound[1].id);
            valuesArray.push(verdadOFalsoFound[0].Total);
            valuesArray.push(verdadOFalsoFound[1].Total);
            labelsArray1.push("Correcto");
            labelsArray1.push("Incorrecto");
            valuesArray1.push(verdadOFalsoFound[2].Correcto);
            valuesArray1.push(verdadOFalsoFound[2].Incorrecto);
            valuesArray10.push(verdadOFalsoFound[3].Correcto);
            valuesArray10.push(verdadOFalsoFound[3].Incorrecto);
            valuesArray2.push(verdadOFalsoFound[4].Correcto);
            valuesArray2.push(verdadOFalsoFound[4].Incorrecto);
            valuesArray3.push(verdadOFalsoFound[5].Correcto);
            valuesArray3.push(verdadOFalsoFound[5].Incorrecto);
            valuesArray4.push(verdadOFalsoFound[6].Correcto);
            valuesArray4.push(verdadOFalsoFound[6].Incorrecto);
            valuesArray5.push(verdadOFalsoFound[7].Correcto);
            valuesArray5.push(verdadOFalsoFound[7].Incorrecto);
            valuesArray6.push(verdadOFalsoFound[8].Correcto);
            valuesArray6.push(verdadOFalsoFound[8].Incorrecto);
            valuesArray7.push(verdadOFalsoFound[9].Correcto);
            valuesArray7.push(verdadOFalsoFound[9].Incorrecto);
            valuesArray8.push(verdadOFalsoFound[10].Correcto);
            valuesArray8.push(verdadOFalsoFound[10].Incorrecto);
            valuesArray9.push(verdadOFalsoFound[11].Correcto);
            valuesArray9.push(verdadOFalsoFound[11].Incorrecto);
            pregunta1 = verdadOFalsoFound[2].Texto;
            pregunta10 = verdadOFalsoFound[3].Texto;
            pregunta2 = verdadOFalsoFound[4].Texto;
            pregunta3 = verdadOFalsoFound[5].Texto;
            pregunta4 = verdadOFalsoFound[6].Texto;
            pregunta5 = verdadOFalsoFound[7].Texto;
            pregunta6 = verdadOFalsoFound[8].Texto;
            pregunta7 = verdadOFalsoFound[9].Texto;
            pregunta8 = verdadOFalsoFound[10].Texto;
            pregunta9 = verdadOFalsoFound[11].Texto;
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
    }, [verdadOFalsoFound]);
    return (
        <div className="grid">
            <div className="col-12 xl:col-12">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{general ? "Gráfica general" : ''}</p>
                    <Chart type="doughnut" data={general} style={{ position: 'relative', width: '50%' }} />
                </div>
            </div>
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
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{pregunta3 ? pregunta3.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta3} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{pregunta4 ? pregunta4.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta4} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{pregunta5 ? pregunta5.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta5} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{pregunta6 ? pregunta6.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta6} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{pregunta7 ? pregunta7.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta7} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{pregunta8 ? pregunta8.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta8} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{pregunta9 ? pregunta9.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta9} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
            <div className="col-6 xl:col-6">
                <div className="card flex flex-column align-items-center">
                    <p className="text-lg" >{pregunta10 ? pregunta10.pregunta : ''}</p>
                    <Chart type="doughnut" data={pregunta10} style={{ position: 'relative', width: '90%' }} />
                </div>
            </div>
        </div>
    );
}
