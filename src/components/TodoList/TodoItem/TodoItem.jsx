import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { remove, changeCompleted } from "../../../store/todos/todosActions.js";

import './TodoItem.css'

function TodoItem({ todo }) {
    const [isCompleted, setIsCompleted] = useState(todo.completed)
    const dispatch = useDispatch()

    const handleCompleted = () => {
        setIsCompleted(!isCompleted)

        dispatch(
            changeCompleted({
                id: todo.id,
                completed: !isCompleted,
            })
        )
    }

    return (
        <div className="todo-item">
            <div className="text">
                {todo.text}
            </div>

            <div className="actions">
                <div className="completed">
                    <input
                        onChange={handleCompleted}
                        type="checkbox"
                        checked={todo.completed}
                    />
                </div>
                <div className="delete">
                    <button
                        onClick={() => {
                            dispatch(remove(todo.id))
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem