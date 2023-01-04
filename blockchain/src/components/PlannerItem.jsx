import { Badge } from "react-bootstrap";
import { FcEmptyTrash } from "react-icons/fc";
import { FaTrash } from "react-icons/fa";

const PlannerItem = ({ planner }) => {
  return (
    <div id="plannerItemDiv">
      <Badge variant="dark" className="sidebarBadge">
        {planner.name}
      </Badge>
      <FcEmptyTrash className="sidebarTrash" />
      {/* <FaTrash /> */}
    </div>
  );
};
export default PlannerItem;
