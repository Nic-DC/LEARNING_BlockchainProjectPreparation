import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

const NewPlannerModal = ({ showModal, handleClose, getPlanners }) => {
  const [name, setName] = useState("");

  console.log("the name is: ", name);

  const clearPlannerName = () => {
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("the name is what: ", name);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    };

    const endpoint = `http://localhost:3005/planners`;

    const res = await fetch(endpoint, options);

    if (res.ok) {
      const data = await res.json();
      console.log("data is: ", data);
      clearPlannerName();
      getPlanners();
    }
  };

  return (
    <Modal
      show={showModal}
      onHide={() => {
        // clearPlannerName();
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
          <Button
            variant="outline-dark"
            onClick={() => {
              handleClose();
            }}
            type="submit"
          >
            Create Planner
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default NewPlannerModal;
