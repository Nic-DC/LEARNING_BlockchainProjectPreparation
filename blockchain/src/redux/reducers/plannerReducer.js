import { SELECT_PLANNER } from "../actions";

const plannerState = {
  selectedPlanner: null,
};

const plannerReducer = (state = plannerState, action) => {
  switch (action.type) {
    case SELECT_PLANNER:
      return {
        ...state,
        selectedPlanner: action.payload,
      };
    default:
      return state;
  }
};

export default plannerReducer;
