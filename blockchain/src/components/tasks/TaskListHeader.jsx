import { MdOutlineAddTask } from "react-icons/md";
import { Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

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

      <Button variant="outline-warning">
        <span className="text-dark mr-2">New Task</span>
        <MdOutlineAddTask id="addTaskIcon" />
      </Button>
    </div>
  );
};
export default TaskListHeader;
