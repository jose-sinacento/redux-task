import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todosSlice";

const InputTask = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const onClickHandlerAddTask = (e) => {
        e.preventDefault();
        dispatch(addTask({text}));
        setText("");
    }

    return (
        <>
        <form onSubmit={onClickHandlerAddTask}>
            <label>Add task: </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit">Añadir</button>
        </form>
        </>
    )
}

export default InputTask;