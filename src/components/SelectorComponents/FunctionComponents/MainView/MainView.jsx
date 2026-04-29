import SmileList from "./SmileList/SmileList.jsx";
import ResultsContainer from "./ResultsContainer/ResultsContainer.jsx";
import { useState, useEffect } from "react";

function MainViewFn() {
    const startSmilesArr = [
        {
            id: 1,
            smile: '😀',
            clicked: 0
        },
        {
            id: 2,
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
        }
    ]

    const [smiles, setSmiles] = useState(startSmilesArr);
    const [winSmile, setWinSmile] = useState('');
    const [maxClicked, setMaxClicked] = useState(0);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('smiles'));

        if (data) {
            setSmiles(data);
        }
    }, [])

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

        setSmiles(tempArray);

        localStorage.setItem('smiles', JSON.stringify(tempArray));
    }

    const cleanResults = () => {
        setShowResults(false);
        localStorage.removeItem('smiles')

        setSmiles(startSmilesArr);
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

        setWinSmile(localWinSmile)
        setMaxClicked(localClicked);
        setShowResults(true);
    }

    return (
        <div className="container">
            <div className="title">
                Проголосувати за найкращий смайлик FN
            </div>

            <SmileList
                smiles={smiles}
                handleClickToSmile={handleClickToSmile}
            />

            <div
                className="button-results"
                onClick={handleShowResults}
            >
                Show Results
            </div>

            {showResults && <ResultsContainer smile={winSmile} clicked={maxClicked}/>}

            {
                showResults &&
                <div
                    className="button-results-clear"
                    onClick={cleanResults}
                >
                    Очистити результати
                </div>
            }
        </div>
    )
}

export default MainViewFn;