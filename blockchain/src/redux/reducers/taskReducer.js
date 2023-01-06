import { SELECT_TASK } from "../actions";

const taskState = {
  selectedTask: null,
};

const taskReducer = (state = taskState, action) => {
  switch (action.type) {
    case SELECT_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
