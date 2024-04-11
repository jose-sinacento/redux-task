import { useSelector } from "react-redux";

export function Tasks() {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <h1>Tasks List</h1>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}