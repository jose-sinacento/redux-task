import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: tasks.length + 1,
                text: action.payload.text,
            };
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            const {id} = action.payload;
            const getTask = state.find(task => task.id === id);
            if (getTask) {
                return state.filter(task => task.id !==id);
            }
        }
    }
});

export const {addTask, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;