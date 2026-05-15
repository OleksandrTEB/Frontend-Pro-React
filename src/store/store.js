import { createStore } from "redux";

import todosReducer from "./todos/todosReducer.js";

export const store = createStore(todosReducer);