import { useEffect } from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { MdOutlineAddTask } from "react-icons/md";
import { useSelector } from "react-redux";
import ModalForm from "./ModalForm";

const NewTaskModal = ({ getTasks }) => {
  const selectedPlannerID = useSelector((store) => store.planner.selectedPlanner._id);
  // FORM functions
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeCategory = (e) => setCategory(e.target.value);
  const handleChangeContent = (e) => setContent(e.target.value);

  console.log("new task's name is: ", name);
  console.log("new task's category is: ", category);
  console.log("new task's content is: ", content);

  const resetInputContent = () => {
    setName("");
    setCategory("");
    setContent("");
  };

  // MODAL open/close
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // FETCHING & POSTING
  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = {
      name: name,
      category: category,
      content: content,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    };

    const endpoint = `http://localhost:3005/planners/${selectedPlannerID}/tasks`;

    try {
      const res = await fetch(endpoint, options);

      if (res.ok) {
        const data = res.json();
        console.log("The data is: ", data);
        resetInputContent();
        getTasks();
      } else {
        console.log("the response for POSTing a new task is NOT ok");
      }
    } catch (error) {
      console.log("handleSubmit for POSTing a new task: ", error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow}>
        <span className="text-dark mr-2">New Task</span>
        <MdOutlineAddTask id="addTaskIcon" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <ModalForm
              name={name}
              nameChange={handleChangeName}
              category={category}
              categoryChange={handleChangeCategory}
              content={content}
              contentChange={handleChangeContent}
              resetStates={resetInputContent}
            />

            <Button variant="outline-dark" onClick={handleClose} type="submit">
              Create Task
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default NewTaskModal;
