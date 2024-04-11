import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/todosSlice";

export function Task({ id, task }) {
  const dispatch = useDispatch();
  const onClickDeleteTaskHandler = (id) => {
    dispatch(deleteTask({ id }));
  };

  return (
    <>
      <li key={task.id}>
        {task.text}
        <button onClick={() => onClickDeleteTaskHandler(task.id)}>Delete</button>
      </li>
    </>
  );
};