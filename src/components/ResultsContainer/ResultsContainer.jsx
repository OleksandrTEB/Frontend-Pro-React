import React from "react";
import './ResultsContainer.css';

class ResultsContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="results-container">
                <div className="result-title">
                    Результати голосування:
                </div>

                <div className="win-smile">
                    Переможець:
                </div>

                <div className="smile">
                    {this.props.smile}
                </div>

                <div className="clicked">
                    Кількість голосів: {this.props.clicked}
                </div>
            </div>
        )
    }
}

export default ResultsContainer;