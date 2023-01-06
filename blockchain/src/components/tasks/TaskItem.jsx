import { useState } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectTask } from "../../redux/actions";

import DeleteTaskModal from "./DeleteTaskModal";
import EditTaskModal from "./EditTaskModal";

const TaskItem = ({ task, getTasks }) => {
  console.log("the task, in TaskItem, is: ", task);
  // DISPATCH the selected task
  const dispatch = useDispatch();

  // MODAL functions and variables
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowDelete = () => setShowDelete(true);
  const handleCloseDelete = () => setShowDelete(false);

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
        <Button variant="outline-danger" onClick={handleShowDelete}>
          Delete Task
        </Button>
        <DeleteTaskModal show={showDelete} handleClose={handleCloseDelete} getTasks={getTasks} />
      </Card.Body>
    </Card>
  );
};
export default TaskItem;
