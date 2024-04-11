import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.length + 1,
        text: action.payload.text,
      };

      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
    }
  }
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;