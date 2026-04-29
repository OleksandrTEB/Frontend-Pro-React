import React from "react";
import SmileItem from '../SmileItem/SmileItem.jsx';
import './SmileList.css';

class SmileList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="smile-list">
                {this.props.smiles.map((smile, index) =>
                    <SmileItem
                        key={index}
                        smile={smile}
                        handleClickToSmile={this.props.handleClickToSmile}
                    />
                )}
            </div>
        )
    }
}

export default SmileList;