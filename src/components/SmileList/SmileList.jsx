import React from "react";
import SmileItem from '../SmileItem/SmileItem.jsx';
import './SmileList.css';

class SmileList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles: this.props.smiles
        }
    }

    render() {
        return (
            <div className="smile-list">
                {this.state.smiles.map((smile, index) =>
                    <SmileItem
                        key={index}
                        code={smile.smile}
                        clicked={smile.clicked}
                    />
                )}
            </div>
        )
    }
}

export default SmileList;