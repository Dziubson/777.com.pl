import React, { useEffect, useState } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
//import { freeSet } from '@coreui/icons';
//import CIcon from '@coreui/icons-react';
import { Prediction } from '../types';
import predictionService from '../services/predictionService';

const HomePage: React.FC = () => {
    const [predictions, setPredictions] = useState<Prediction[]>([]);

    useEffect(() => {
        const fetchPredictions = async () => {
            try {
                const response = await predictionService.getAllPredictions();
                if (response) {
                    setPredictions(response);
                } else {
                    console.error('Response from getAllPredictions is undefined or not an array');
                }
            } catch (err) {
                console.error('Error fetching predictions:', err);
            }
        };

        fetchPredictions();
    }, []);
    return (
        <CRow>
            {predictions.map((prediction: Prediction, index: number) => (
                <CCol xs="12" sm="6" lg="3" key={index}>
                    <CCard color="gradient-info" className="text-white text-center">
                        <CCardHeader>
                            Prediction {index + 1}
                        </CCardHeader>
                        <CCardBody>
                            {/* Add relevant prediction details here */}
                            <p className="card-text">User ID: {prediction.userId}</p>
                            <p className="card-text">Match ID: {prediction.matchId}</p>
                            <p className="card-text">Bet ID: {prediction.betId}</p>
                            <p className="card-text">Prediction: {prediction.prediction}</p>
                        </CCardBody>
                    </CCard>
                </CCol>
            ))}
        </CRow>
    );
};

export default HomePage;
