import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'

import { addTodo, clear, setTodos } from "../../store/slices/todosSlice.js";
import TodoList from "../../components/TodoList/TodoList.jsx"
import "./MainPage.css"

function MainPage() {
    const todosFromServer = [
        {
            id: 1,
            text: "Finish reading the last three chapters of my book",
            completed: false
        },
        {
            id: 2,
            text: "Water the plants and mist the ferns",
            completed: false
        },
        {
            id: 3,
            text: "Research how to bake a sourdough loaf from scratch",
            completed: false
        },
        {
            id: 4,
            text: "Organize the junk drawer in the kitchen",
            completed: false
        },
        {
            id: 5,
            text: "Go for a 20-minute sunset walk",
            completed: false
        },
        {
            id: 6,
            text: "Draft the email for the upcoming project proposal",
            completed: false
        },
        {
            id: 7,
            text: "Call mom to check in on her weekend plans",
            completed: false
        },
        {
            id: 8,
            text: "Practice 15 minutes of mindfulness or meditation",
            completed: false
        },
        {
            id: 9,
            text: "Clean out the car and check the tire pressure",
            completed: false
        },
        {
            id: 10,
            text: "Try a new recipe for dinner tonight",
            completed: false
        }
    ]
    const [text, setText] = useState("")

    const dispatch = useDispatch()
    const { todos } = useSelector((state) => state.todos)

    useEffect(() => {
        setTimeout(() => {
            dispatch(setTodos(todosFromServer));
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