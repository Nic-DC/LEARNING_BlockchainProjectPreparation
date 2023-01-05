export const SELECT_PLANNER = `SELECT_PLANNER`;

export const selectPlanner = (selectedPlanner) => {
  return {
    type: SELECT_PLANNER,
    payload: selectedPlanner,
  };
};
