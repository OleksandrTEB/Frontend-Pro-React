import React from "react";
import './ResultsContainer.css';

function ResultsContainer({ smile, clicked}) {
    return (
        <div className="results-container">
            <div className="result-title">
                Результати голосування:
            </div>

            <div className="win-smile">
                Переможець:
            </div>

            <div className="smile">
                {smile}
            </div>

            <div className="clicked">
                Кількість голосів: {clicked}
            </div>
        </div>
    )
}

export default ResultsContainer;