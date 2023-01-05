import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MdOutlineAddTask } from "react-icons/md";
import ModalForm from "./ModalForm";

const NewTaskModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <ModalForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NewTaskModal;
