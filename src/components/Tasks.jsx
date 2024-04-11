import { useSelector } from "react-redux";
import { Task } from "./Task";

export function Tasks() {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <h1>Tasks List</h1>

      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};