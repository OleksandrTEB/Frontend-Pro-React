import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { removeTodo, changeCompleted } from "../../../store/slices/todosSlice.js";

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
                {todo.title}
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
                            dispatch(removeTodo(todo.id))
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