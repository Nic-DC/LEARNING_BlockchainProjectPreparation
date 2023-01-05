import { useState } from "react";
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeletePlannerItem from "./DeletePlannerItem";
import EditPlannerItem from "./EditPlannerItem";
import { selectPlanner } from "../redux/actions";

const PlannerItem = ({ planner }) => {
  const dispatch = useDispatch();

  return (
    <div id="plannerItemDiv">
      <Badge variant="dark" className="sidebarBadge" onClick={() => dispatch(selectPlanner(planner))}>
        {planner.name}
      </Badge>
      <Badge>
        <EditPlannerItem />
        <DeletePlannerItem />
      </Badge>
    </div>
  );
};
export default PlannerItem;
