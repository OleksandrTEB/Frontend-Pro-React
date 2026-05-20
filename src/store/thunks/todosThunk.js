import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/todos"
export const getTodos = createAsyncThunk(
    "todos/getTodos",
    async (_, thunkAPI) => {
        try {
            const response = await fetch(`${API_URL}/?_limit=10`);

            if(!response.ok) {
                return thunkAPI.rejectWithValue("Error");
            }

            return await response.json()
        } catch (e) {
            return thunkAPI.rejectWithValue(`Error: ${e.message}`);
        }
    }
)