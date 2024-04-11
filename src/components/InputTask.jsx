import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todosSlice";

const InputTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onClickHandlerAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ text }));
    setText('');
  }

  return (
    <>
      <form onSubmit={onClickHandlerAddTask}>
        <label>Add Task: </label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default InputTask;