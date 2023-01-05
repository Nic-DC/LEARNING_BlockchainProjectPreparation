import { Badge } from "react-bootstrap";
// import { FcEmptyTrash } from "react-icons/fc";
import { GrTrash } from "react-icons/gr";
import { useSelector } from "react-redux";

const DeletePlannerItem = ({ getPlanners }) => {
  const selectedPlannerID = useSelector((store) => store.planner.selectedPlanner._id);

  const deletePlanner = async () => {
    const options = {
      method: "DELETE",
    };

    const endpoint = `http://localhost:3005/planners/${selectedPlannerID}`;

    try {
      const res = await fetch(endpoint, options);

      if (res.ok) {
        const data = await res.json();
        console.log("data from DELETE planner is: ", data);
        getPlanners();
      } else {
        console.log("fetch NOT ok when DELETEing planner");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Badge>
      {/* <FcEmptyTrash className="sidebarTrash" /> */}
      <GrTrash className="sidebarTrash" onClick={() => deletePlanner()} />
    </Badge>
  );
};
export default DeletePlannerItem;
