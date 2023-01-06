import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import ModalForm from "./ModalForm";

const EditTaskModal = ({ show, handleClose, getTasks }) => {
  // IDs for planner and task
  const selectedPlannerID = useSelector((store) => store.planner.selectedPlanner._id);
  const selectedTaskID = useSelector((store) => store.task.selectedTask._id);
  console.log("the selected id for the planner in the EDIT fetch is: ", selectedPlannerID);
  console.log("the selected id for the task in the EDIT fetch is: ", selectedTaskID);

  // FORM functions and variables
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const nameChange = (e) => setName(e.target.value);
  const categoryChange = (e) => setCategory(e.target.value);
  const contentChange = (e) => setContent(e.target.value);

  console.log("EDIT task - name: ", name);
  console.log("EDIT task - category: ", category);
  console.log("EDIT task - content: ", content);

  const clearFormInputs = () => {
    setName("");
    setCategory("");
    setContent("");
  };

  // FETCH & PUT
  const handleSubmit = async (e) => {
    e.preventDefault();
    editTask();
  };

  const editTask = async () => {
    const task = {
      name: name,
      category: category,
      content: content,
    };

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    };

    const endpoint = `http://localhost:3005/planners/${selectedPlannerID}/tasks/${selectedTaskID}`;

    try {
      const res = await fetch(endpoint, options);

      if (res.ok) {
        const updatedTask = await res.json();
        console.log("the updated task is: ", updatedTask);
        getTasks();
        clearFormInputs();
      } else {
        console.log("The UPDATED task fetch is NOT ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <ModalForm
            name={name}
            nameChange={nameChange}
            category={category}
            categoryChange={categoryChange}
            content={content}
            contentChange={contentChange}
          />
          <Button variant="dark" onClick={handleClose} className="mr-2">
            Go Back
          </Button>
          <Button variant="outline-dark" onClick={handleClose} type="submit">
            Edit Task
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default EditTaskModal;
