import React from "react";
import SmileList from "../SmileList/SmileList.jsx";
import './MainView.css';
import ResultsContainer from "../ResultsContainer/ResultsContainer.jsx";

class MainView extends React.Component {
    constructor() {
        super();

        this.state = {
            showResults: false,
            smiles: [
                {
                    smile: '😀',
                    clicked: 0
                },
                {
                    smile: '😃',
                    clicked: 0
                },
                {
                    smile: '😄',
                    clicked: 0
                },
                {
                    smile: '😋',
                    clicked: 0
                },
                {
                    smile: '😎',
                    clicked: 0
                },
                {
                    smile: '😍',
                    clicked: 0
                },
            ]
        }
    }

    showResults = () => {
        this.randomSmile = this.state.smiles[Math.floor(Math.random() * this.state.smiles.length)].smile;
        this.randomClicked = Math.floor(Math.random() * 20);

        this.setState(() => {
            return {
                showResults: true,
            }
        })
    }

    clearResults = () => {
        this.setState(() => {
            return {
                showResults: false,
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="title">
                    Проголосувати за найкращий смайлик
                </div>

                <SmileList smiles={this.state.smiles} />

                <div
                    className="button-results"
                    onClick={this.showResults}
                >
                    Show Results
                </div>

                {this.state.showResults && <ResultsContainer smile={this.randomSmile} clicked={this.randomClicked} />}

                {
                    this.state.showResults &&
                    <div
                        className="button-results-clear"
                        onClick={this.clearResults}
                    >
                        Очистити результати
                    </div>
                }
            </div>
        )
    }
}

export default MainView;