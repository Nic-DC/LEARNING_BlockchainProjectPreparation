import { Badge } from "react-bootstrap";

const TaskItem = ({ task }) => {
  console.log("the task, in TaskItem, is: ", task);
  return (
    <div>
      <Badge>{task.name}</Badge>
      <p>{task.content}</p>
    </div>
  );
};
export default TaskItem;
