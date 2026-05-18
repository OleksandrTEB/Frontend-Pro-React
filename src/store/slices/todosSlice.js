import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            const todo = {
                id: state.todos.length + 1,
                text: action.payload,
                completed: false
            }

            state.todos.push(todo)
        },

        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        clear(state) {
            state.todos = []
        },

        setTodos(state, action) {
            state.todos = action.payload
        },

        changeCompleted(state, action) {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: action.payload.completed,
                    }
                } else {
                    return todo
                }
            })
        }
    }
})

export const {
    addTodo,
    removeTodo,
    clear,
    setTodos,
    changeCompleted
} = todosSlice.actions;

export default todosSlice.reducer;