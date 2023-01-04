import { useState } from "react";
import { Button, Badge } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import NewPlannerModal from "../components/NewPlannerModal";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleModal = () => setToggle(!toggle);

  return (
    <div>
      <Button variant="outline-dark" className="sidebar-btn" onClick={toggleModal}>
        New Planner{" "}
        <Badge variant="light">
          <AiOutlinePlus id="newPlannerIcon" />
        </Badge>
      </Button>
      <NewPlannerModal showModal={toggle} handleClose={toggleModal} />
    </div>
  );
};
export default Sidebar;
