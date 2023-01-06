import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const EditPlannerModal = ({ show, handleClose, getPlanners }) => {
  const selectedPlannerID = useSelector((store) => store.planner.selectedPlanner._id);

  // FORM functions and variables
  const [name, setName] = useState("");
  console.log("the name in the EDIT planner modal is: ", name);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const clearInputtedName = () => {
    setName("");
  };

  // FETCH & EDIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    editPlanner();
  };

  const editPlanner = async () => {
    const planner = {
      name: name,
    };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planner),
    };

    const endpoint = `http://localhost:3005/planners/${selectedPlannerID}`;

    try {
      const res = await fetch(endpoint, options);

      if (res.ok) {
        const editedPlanner = await res.json();
        console.log("the edited planner is: ", editedPlanner);
        getPlanners();
        clearInputtedName();
      } else {
        console.log("The fetch for EDITING the planner is not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Planner</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Control
              value={name}
              onChange={(e) => handleChangeName(e)}
              type="text"
              placeholder="edit planner name here"
            />
          </Form.Group>
          <Button variant="dark" type="submit" onClick={handleClose}>
            Edit Planner
          </Button>
          <Button variant="outline-dark" onClick={handleClose} className="ml-2">
            Go Back
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default EditPlannerModal;
