// components/PredictionCard.tsx
import React from 'react';
import { Prediction } from '../../types';
import Card from 'react-bootstrap/Card';

interface PredictionCardProps {
    prediction: Prediction;
}

const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Prediction ID: {prediction.id}</Card.Title>
                <Card.Text>
                    User ID: {prediction.userId}
                </Card.Text>
                <Card.Text>
                    Match ID: {prediction.matchId}
                </Card.Text>
                <Card.Text>
                    Bet ID: {prediction.betId}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PredictionCard;

