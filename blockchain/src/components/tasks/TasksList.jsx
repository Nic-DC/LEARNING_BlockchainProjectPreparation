import TaskItem from "./TaskItem";
import TaskListHeader from "./TaskListHeader";

const TasksList = ({ tasks }) => {
  return (
    <>
      <TaskListHeader tasks={tasks} />
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
