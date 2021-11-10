import React, { createContext } from 'react';
import firebase from 'firebase/compat/app';

import "firebase/compat/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyBPRp4xTpCcaUagaA5P_YBFsqyWc3_H-u0",
    authDomain: "realtimetest-54cdd.firebaseapp.com",
    projectId: "realtimetest-54cdd",
    storageBucket: "realtimetest-54cdd.appspot.com",
    messagingSenderId: "740465626710",
    appId: "1:740465626710:web:0a69deffa710515d4b35f7",
    measurementId: "G-L0KYEFY7F8"
})

const firestore = firebase.firestore();

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const verdadOFalsoRef = firestore.collection("verdadOFalso");
    return (
        <DashboardContext.Provider value={{
            verdadOFalsoRef,
        }}>
            {children}
        </DashboardContext.Provider>
    );
}