import { ADD_TODO, REMOVE_TODO, CLEAR, SET_TODOS, CHANGE_COMPLETED } from "./todosTypes.js";

const initialState = {
    todos: []
};

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.payload,
                        completed: false
                    }]
            }
        case REMOVE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case CLEAR:
            return {
                todos: []
            }
        case SET_TODOS:
            return {
                todos: action.payload
            }
        case CHANGE_COMPLETED:
            return {
                todos: state.todos.map(todo => {
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
        default:
            return state;
    }
}