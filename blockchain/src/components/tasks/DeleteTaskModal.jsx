import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const DeleteTaskModal = ({ show, handleClose, getTasks }) => {
  // IDs for planner and task
  const selectedPlannerID = useSelector((store) => store.planner.selectedPlanner._id);
  const selectedTaskID = useSelector((store) => store.task.selectedTask._id);
  console.log("the selected id for the planner in the DELETE fetch is: ", selectedPlannerID);
  console.log("the selected id for the task in the DELETE fetch is: ", selectedTaskID);

  // FETCH & DELETE
  const deleteTask = async () => {
    const options = {
      method: "DELETE",
    };

    const endpoint = `http://localhost:3005/planners/${selectedPlannerID}/tasks/${selectedTaskID}`;

    try {
      const res = await fetch(endpoint, options);

      if (res.ok) {
        const deletedTask = await res.json();
        console.log("the deleted TASK is: ", deletedTask);
        getTasks();
        handleClose();
      } else {
        console.log("the fetch for DELETEing a task is NOT ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to delete this task?😕</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button className="mr-2" variant="outline-dark" onClick={handleClose}>
          Go Back
        </Button>
        <Button variant="danger" onClick={deleteTask}>
          Delete
        </Button>
      </Modal.Body>
    </Modal>
  );
};
export default DeleteTaskModal;
