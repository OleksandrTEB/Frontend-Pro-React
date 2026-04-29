import React from "react";
import './SmileItem.css';

class SmileItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className="smile-item"
                onClick={() => {
                    this.props.handleClickToSmile(this.props.smile)
                }}
            >
                <div className="smile">
                    {this.props.smile.smile}
                </div>

                <div className="amount-clicked">
                    {this.props.smile.clicked}
                </div>
            </div>
        )
    }
}

export default SmileItem;