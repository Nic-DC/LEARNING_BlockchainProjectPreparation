import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

const NewPlannerModal = ({ showModal, handleClose }) => {
  const [name, setName] = useState("");

  console.log("the name is: ", name);

  const clearPlannerName = () => {
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      show={showModal}
      onHide={() => {
        clearPlannerName();
        handleClose();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>New Planner</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Control
              value={name}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Planner name:"
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-dark"
          onClick={() => {
            clearPlannerName();
            handleClose();
          }}
        >
          Create Planner
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default NewPlannerModal;
