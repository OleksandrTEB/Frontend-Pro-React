import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./slices/todosSlice.js";

export const store = configureStore({
    reducer: {
        todos: todosSlice
    }
})