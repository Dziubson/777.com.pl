import React from 'react';

interface MatchProps {
    match: {
        homeTeam: string,
        awayTeam: string,
        time: string,
    };
}

const MatchCard: React.FC<MatchProps> = ({ match }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{match.homeTeam} VS {match.awayTeam}</h5>
                <p className="card-text">{match.time}</p>
            </div>
        </div>
    );
};

export default MatchCard;