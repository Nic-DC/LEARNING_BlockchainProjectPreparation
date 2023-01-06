import TaskItem from "./TaskItem";
import TaskListHeader from "./TaskListHeader";

const TasksList = ({ tasks, getTasks }) => {
  return (
    <>
      {/* 
      2 components from the "tasks" folder:
        1. TaskListHeader
        2. TaskItem
      */}
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
