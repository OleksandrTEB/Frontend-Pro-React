import './TodoItem.css';

export default function TodoItem({theme, id, title, completed, handleChangeCompleted, handleDeleteTodo}) {
    return (
        <div className={`todoItem ${theme}-item`}>
            <div className="title">
                {title}
            </div>

            <div className="events">
                <div>
                    <input
                        type="checkbox"
                        checked={completed}
                        onClick={() => {
                            handleChangeCompleted(id)
                        }}
                        onChange={() => {
                        }}
                    />
                </div>

                <button
                    className="delete"
                    onClick={() => {
                        handleDeleteTodo(id)
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}