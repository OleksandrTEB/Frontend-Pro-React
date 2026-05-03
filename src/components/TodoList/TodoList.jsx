import { useState, useEffect } from "react";

import TodoItem from "./TodoItem/TodoItem.jsx";

import './TodoList.css'

export default function TodoList({ theme }) {
    const todosFromServer = [
        {
            id: 1,
            title: 'Вивчити JS',
            completed: false
        },
        {
            id: 2,
            title: 'Прочитати документацію React',
            completed: false
        },
        {
            id: 3,
            title: 'Написати простий To-Do додаток',
            completed: true
        },
        {
            id: 4,
            title: 'Розібратися з CSS Grid та Flexbox',
            completed: false
        },
        {
            id: 5,
            title: 'Налаштувати оточення Node.js',
            completed: true
        },
        {
            id: 6,
            title: 'Вивчити основи TypeScript',
            completed: false
        },
        {
            id: 7,
            title: 'Створити репозиторій на GitHub',
            completed: true
        },
        {
            id: 8,
            title: 'Ознайомитися з REST API',
            completed: false
        },
        {
            id: 9,
            title: 'Повторити методи масивів',
            completed: true
        },
        {
            id: 10,
            title: 'Підготувати резюме розробника',
            completed: false
        }
    ];

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(todosFromServer);
    }, [])

    const handleChangeCompleted = (id) => {
        const tempArr = todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            } else {
                return todo;
            }
        })

        setTodos(tempArr);
    }

    const handleDeleteTodo = (id) => {
        const tempArr = todos.filter(todo => todo.id !== id);

        setTodos(tempArr);
    }

    return (
        <div className="todoList">
            {
                todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            theme={theme}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            handleChangeCompleted={handleChangeCompleted}
                            handleDeleteTodo={handleDeleteTodo}
                        />
                    )
                })
            }
        </div>
    )
}