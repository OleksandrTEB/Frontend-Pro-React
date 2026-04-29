import './SmileItem.css';

function SmileItem({ handleClickToSmile, smile }) {
    return (
        <div
            className="smile-item"
            onClick={() => {
                handleClickToSmile(smile)
            }}
        >
            <div className="smile">
                {smile.smile}
            </div>

            <div className="amount-clicked">
                {smile.clicked}
            </div>
        </div>
    )
}

export default SmileItem;