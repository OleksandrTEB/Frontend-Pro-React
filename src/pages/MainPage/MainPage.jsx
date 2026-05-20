import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'

import { getTodos } from "../../store/thunks/todosThunk.js";
import { clear, addTodo } from "../../store/slices/todosSlice.js";
import TodoList from "../../components/TodoList/TodoList.jsx"
import "./MainPage.css"

function MainPage() {
    const [text, setText] = useState("")

    const dispatch = useDispatch()
    const { todos } = useSelector((state) => state.todos)

    useEffect(() => {
        setTimeout(() => {
            dispatch(getTodos());
        }, 1000)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text.length > 0) {
            dispatch(addTodo(text))
            setText("")
        }
    }

    return (
        <div className="container">
            <div className="title">
                Todo Service
            </div>

            <div className="form">
                <form
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        onChange={(e) => {
                            const value = e.target.value
                            setText(value)
                        }}
                        value={text}
                    />

                    <button
                        className="submit"
                        type="submit"
                    >
                        Add
                    </button>
                </form>
            </div>

            <TodoList
                todos={todos}
            />

            {
                todos.length > 0
                    &&
                <button
                    className="clear"
                    onClick={() => {
                        dispatch(clear())
                    }}
                >
                    Clear All Todos: {todos.length}
                </button>
            }
        </div>
    )
}

export default MainPage