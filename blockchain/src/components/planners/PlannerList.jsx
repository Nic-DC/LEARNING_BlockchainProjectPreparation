/*  
1 component from the "planners" folder : PlannerItem
*/

import { Badge } from "react-bootstrap";
import PlannerItem from "./PlannerItem";

const PlannerList = ({ plannersList, getPlanners }) => {
  return (
    <ul id="sidebarList" className="">
      {console.log("plannersList", plannersList)}
      {plannersList ? (
        plannersList.map((planner) => (
          <li className="sidebarItem d-flex mt-3" key={planner._id}>
            <PlannerItem planner={planner} getPlanners={getPlanners} />
          </li>
        ))
      ) : (
        <h4>
          <Badge variant="warning">No planners yet. Click + to create new planner</Badge>
        </h4>
      )}
    </ul>
  );
};
export default PlannerList;
