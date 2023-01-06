import { useState } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectTask } from "../../redux/actions";

import EditTaskModal from "./EditTaskModal";

const TaskItem = ({ task, getTasks }) => {
  console.log("the task, in TaskItem, is: ", task);
  // DISPATCH the selected task
  const dispatch = useDispatch();

  // MODAL functions and variables
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://picsum.photos/200/50"
        id="cardImg"
        onClick={() => dispatch(selectTask(task))}
      />
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>
          {task.content}{" "}
          <small className="text-muted">
            <Badge variant="dark">{task.category}</Badge>
          </small>
        </Card.Text>

        {/* EDIT task */}
        <Button variant="outline-warning" className="mr-2" onClick={handleShow}>
          Edit Task
        </Button>
        <EditTaskModal show={show} handleClose={handleClose} getTasks={getTasks} />

        {/* DELETE task */}
        <Button variant="outline-danger">Delete Task</Button>
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
