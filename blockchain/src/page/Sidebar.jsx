import { useEffect } from "react";
import { useState } from "react";
import { Button, Badge } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import NewPlannerModal from "../components/NewPlannerModal";
import PlannerList from "../components/PlannerList";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [plannersList, setPlannersList] = useState([]);

  const toggleModal = () => setToggle(!toggle);

  const fetchPlanners = async () => {
    const endpoint = `http://localhost:3005/planners`;
    const options = {
      method: "GET",
    };
    const res = await fetch(endpoint, options);

    if (res.ok) {
      const data = await res.json();

      console.log("data", data);
      setPlannersList(data);
      console.log("plannersList: ", plannersList);
    }
  };

  useEffect(() => {
    fetchPlanners();
  }, []);

  return (
    <div id="sidebarDIV">
      <Button variant="outline-light" className="sidebar-btn" onClick={toggleModal}>
        New Planner{" "}
        <Badge variant="light">
          <AiOutlinePlus id="newPlannerIcon" />
        </Badge>
      </Button>
      <NewPlannerModal showModal={toggle} handleClose={toggleModal} getPlanners={fetchPlanners} />

      <PlannerList plannersList={plannersList} getPlanners={fetchPlanners} />
    </div>
  );
};
export default Sidebar;
