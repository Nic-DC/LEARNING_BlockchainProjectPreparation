import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TasksList from "../components/tasks/TasksList";

const Content = () => {
  const [tasks, setTasks] = useState([]);

  const selectedPlannerID = useSelector((store) => store.planner.selectedPlanner._id);
  console.log("the selected planner's id is: ", selectedPlannerID);

  const getTasks = async () => {
    try {
      const options = {
        header: "GET",
      };

      const endpoint = `http://localhost:3005/planners/${selectedPlannerID}/tasks`;

      const res = await fetch(endpoint, options);

      if (res.ok) {
        console.log("response is: ", res);
        const tasksList = await res.json();
        console.log(`The tasks list for the planner wiht id: ${selectedPlannerID} are: `, tasksList);
        setTasks(tasksList);
      } else {
        console.log("There are no tasks for this planner");
      }
    } catch (error) {
      console.log("getTasks() function has the following error: ", error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [selectedPlannerID]);

  // 1 component from the "tasks" folder
  return <div id="contentDIV">{selectedPlannerID && <TasksList tasks={tasks} getTasks={getTasks} />}</div>;
};
export default Content;
