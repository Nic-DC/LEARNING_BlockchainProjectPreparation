import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import NewTaskModal from "./NewTaskModal";

const TaskListHeader = ({ tasks }) => {
  const selectedPlanner = useSelector((store) => store.planner.selectedPlanner);
  const selectedPlannerID = useSelector((store) => store.planner.selectedPlanner._id);
  const passedTask = tasks.find((task) => task.plannerId === selectedPlannerID);
  console.log("the tasks in TaskListHeader", tasks);
  console.log("selectedPlannerID in TaskListHeader is: ", selectedPlannerID);
  console.log("the passed task is: ", passedTask);

  return (
    <div id="taskListHeaderDIV">
      <div>
        <span>Current planner: </span>
        <Badge variant="warning">{selectedPlanner.name}</Badge>
      </div>

      <NewTaskModal />
    </div>
  );
};
export default TaskListHeader;
