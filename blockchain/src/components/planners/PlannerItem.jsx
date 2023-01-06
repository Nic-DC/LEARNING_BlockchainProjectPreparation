/* 
2 components from the "planners" folder:
  1. EditPlannerItem
  2. DeletePlannerItem
*/

import { Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import DeletePlannerItem from "../planners/DeletePlannerItem";
import EditPlannerItem from "../planners/EditPlannerItem";
import { selectPlanner } from "../../redux/actions";

const PlannerItem = ({ planner, getPlanners }) => {
  const dispatch = useDispatch();

  return (
    <div id="plannerItemDiv">
      <Badge variant="dark" className="sidebarBadge line-clamp" onClick={() => dispatch(selectPlanner(planner))}>
        {planner.name}
      </Badge>
      <Badge className="px-0">
        {/* 
        2 components from the "planners" folder:
          1. EditPlannerItem
          2. DeletePlannerItem
        */}
        <EditPlannerItem getPlanners={getPlanners} />
        <DeletePlannerItem getPlanners={getPlanners} />
      </Badge>
    </div>
  );
};
export default PlannerItem;
