import { Card, Badge, Button } from "react-bootstrap";

const TaskItem = ({ task }) => {
  console.log("the task, in TaskItem, is: ", task);
  return (
    <Card>
      <Card.Img variant="top" src="https://picsum.photos/200/50" />
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>
          {task.content}{" "}
          <small className="text-muted">
            <Badge variant="dark">{task.category}</Badge>
          </small>
        </Card.Text>

        <Button variant="outline-warning">Edit Task</Button>
      </Card.Body>
    </Card>
    // <div className="mb-2">
    //   <Badge variant="">{task.name}</Badge>
    //   <div>
    //     <span>{task.content}</span> <span>{task.category}</span>
    //   </div>
    // </div>
  );
};
export default TaskItem;
