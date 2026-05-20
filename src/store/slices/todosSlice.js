import {createSlice} from "@reduxjs/toolkit";

import {getTodos} from "../thunks/todosThunk.js";

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
                title: action.payload,
                completed: false
            }

            state.todos.push(todo)
        },
        clear(state) {
            state.todos = []
        },
        changeCompleted(state, action) {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: action.payload.completed,
                    }
                } else {
                    return todo
                }
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })

    }
})

export const {
    clear,
    changeCompleted,
    removeTodo,
    addTodo
} = todosSlice.actions;

export default todosSlice.reducer;