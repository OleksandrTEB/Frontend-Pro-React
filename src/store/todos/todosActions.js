import { ADD_TODO, REMOVE_TODO, CLEAR, SET_TODOS, CHANGE_COMPLETED } from "./todosTypes.js";

export function add(text) {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export function remove(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export function clear() {
    return {
        type: CLEAR,
    }
}

export function setTodos(todos) {
    return {
        type: SET_TODOS,
        payload: todos
    }
}

export function changeCompleted(data) {
    return {
        type: CHANGE_COMPLETED,
        payload: data
    }
}