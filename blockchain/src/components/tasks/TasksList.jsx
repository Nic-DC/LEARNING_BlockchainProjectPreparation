import { Container, Row, Col } from "react-bootstrap";
import TaskItem from "./TaskItem";
import TaskListHeader from "./TaskListHeader";

const TasksList = ({ tasks, getTasks }) => {
  return (
    <>
      {/* 
      2 components from the "tasks" folder:
        1. TaskListHeader
        2. TaskItem
      */}
      <TaskListHeader tasks={tasks} getTasks={getTasks} />

      <Container>
        <Row className="mt-4 d-flex justify-content-between">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Col md={5} key={task._id} className="px-0">
                <TaskItem task={task} />
              </Col>
            ))
          ) : (
            <h4>No tasks for this planner</h4>
          )}
        </Row>
      </Container>

      {/* <ul id="contentList">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id}>
              <TaskItem task={task} />
            </li>
          ))
        ) : (
          <h4>No tasks for this planner</h4>
        )}
      </ul> */}
    </>
  );
};
export default TasksList;
