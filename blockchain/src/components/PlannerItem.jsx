import { Badge } from "react-bootstrap";

const PlannerItem = ({ planner }) => {
  return (
    <Badge variant="dark" className="sidebarBadge">
      {planner.name}
    </Badge>
  );
};
export default PlannerItem;
