import { Badge } from "react-bootstrap";

const TaskItem = ({ task }) => {
  console.log("the task, in TaskItem, is: ", task);
  return (
    <div>
      <Badge variant="outline-dark">{task.name}</Badge>
      <div>
        <span>{task.content}</span> <span>{task.done}</span>
      </div>
    </div>
  );
};
export default TaskItem;
