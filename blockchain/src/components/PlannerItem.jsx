import { Badge } from "react-bootstrap";
import DeletePlannerItem from "./DeletePlannerItem";

const PlannerItem = ({ planner, getPlanners }) => {
  return (
    <div id="plannerItemDiv">
      <Badge variant="dark" className="sidebarBadge">
        {planner.name}
      </Badge>
      <DeletePlannerItem getUpdatedPlannersList={getPlanners} />
    </div>
  );
};
export default PlannerItem;
