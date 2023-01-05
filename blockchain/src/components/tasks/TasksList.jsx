import TaskItem from "./TaskItem";
import TaskListHeader from "./TaskListHeader";

const TasksList = ({ tasks, getTasks }) => {
  return (
    <>
      <TaskListHeader tasks={tasks} getTasks={getTasks} />
      <ul id="contentList">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id}>
              <TaskItem task={task} />
            </li>
          ))
        ) : (
          <h4>No tasks for this planner</h4>
        )}
      </ul>
    </>
  );
};
export default TasksList;
