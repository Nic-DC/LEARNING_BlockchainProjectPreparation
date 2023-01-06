export const SELECT_PLANNER = `SELECT_PLANNER`;
export const SELECT_TASK = `SELECT_TASK`;

export const selectPlanner = (selectedPlanner) => {
  return {
    type: SELECT_PLANNER,
    payload: selectedPlanner,
  };
};

export const selectTask = (selectedTask) => {
  return {
    type: SELECT_TASK,
    payload: selectedTask,
  };
};
