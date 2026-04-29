import React from "react";
import SmileItem from './SmileItem/SmileItem.jsx';
import './SmileList.css';

function SmileList({ smiles, handleClickToSmile }) {
    return (
        <div className="smile-list">
            {smiles.map((smile, index) =>
                <SmileItem
                    key={index}
                    smile={smile}
                    handleClickToSmile={handleClickToSmile}
                />
            )}
        </div>
    )
}

export default SmileList;

