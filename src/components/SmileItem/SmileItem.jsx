import React from "react";
import './SmileItem.css';

class SmileItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="smile-item">
                <div className="smile">
                    {this.props.code}
                </div>

                <div className="amount-clicked">
                    {this.props.clicked}
                </div>
            </div>
        )
    }
}

export default SmileItem;