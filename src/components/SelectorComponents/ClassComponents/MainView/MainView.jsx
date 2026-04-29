import React from "react";
import SmileList from "../SmileList/SmileList.jsx";
import './MainView.css';
import ResultsContainer from "../ResultsContainer/ResultsContainer.jsx";

class MainView extends React.Component {
    constructor() {
        super();

        this.state = {
            winSmile: '',
            maxClicked: 0,
            showResults: false,
            smiles: [
                {
                    id: 1,
                    smile: '😀',
                    clicked: 0
                },
                {   id: 2,
                    smile: '😃',
                    clicked: 0
                },
                {
                    id: 3,
                    smile: '😄',
                    clicked: 0
                },
                {
                    id: 4,
                    smile: '😋',
                    clicked: 0
                },
                {
                    id: 5,
                    smile: '😎',
                    clicked: 0
                },
                {
                    id: 6,
                    smile: '😍',
                    clicked: 0
                },
            ]
        }
    }

    cleanResults = () => {
        this.setState((prevState) => {
            return {
                showResults: !prevState.showResults,
            }
        })

        localStorage.removeItem('smiles')

        this.setState({
            smiles: [
                {
                    id: 1,
                    smile: '😀',
                    clicked: 0
                },
                {   id: 2,
                    smile: '😃',
                    clicked: 0
                },
                {
                    id: 3,
                    smile: '😄',
                    clicked: 0
                },
                {
                    id: 4,
                    smile: '😋',
                    clicked: 0
                },
                {
                    id: 5,
                    smile: '😎',
                    clicked: 0
                },
                {
                    id: 6,
                    smile: '😍',
                    clicked: 0
                },
            ]
        })
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('smiles'));

        if (data) {
            this.setState({
                smiles: data
            })
        }
    }


    render() {
        const { smiles, winSmile, maxClicked } = this.state;

        const handleClickToSmile = (smile) => {
            const tempArray = smiles.map(item => {
                if (item.id === smile.id) {
                    return {
                        ...item,
                        clicked: item.clicked + 1
                    }
                } else {
                    return item
                }
            });

            this.setState(() => {
                return {
                    smiles: tempArray
                }
            })

            localStorage.setItem('smiles', JSON.stringify(tempArray));
        }

        const handleShowResults = () => {
            let localClicked = 0;
            let localWinSmile = '';

            for (let i = 0; i < smiles.length; i++) {
                if (smiles[i].clicked > localClicked) {
                    localClicked = smiles[i].clicked;
                    localWinSmile = smiles[i].smile;
                }
            }

            this.setState(() => {
                return {
                    winSmile: localWinSmile,
                    maxClicked: localClicked,
                    showResults: true
                }
            })
        }

        return (
            <div className="container">
                <div className="title">
                    Проголосувати за найкращий смайлик Class
                </div>

                <SmileList
                    smiles={this.state.smiles}
                    handleClickToSmile={handleClickToSmile}
                />

                <div
                    className="button-results"
                    onClick={handleShowResults}
                >
                    Show Results
                </div>

                {this.state.showResults && <ResultsContainer smile={winSmile} clicked={maxClicked} />}

                {
                    this.state.showResults &&
                    <div
                        className="button-results-clear"
                        onClick={this.cleanResults}
                    >
                        Очистити результати
                    </div>
                }
            </div>
        )
    }
}

export default MainView;