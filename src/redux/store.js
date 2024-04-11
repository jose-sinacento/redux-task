import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './todosSlice'

const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
});

export default store;