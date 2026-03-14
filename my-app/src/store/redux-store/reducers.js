import { ACTIONS_TYPES, numAdd, numDelete } from "./actions";
const initialState = {
  num: 0,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.NUM_PLUS: {
      return {
        ...state,
        num: state.num + action.payload,
      };
    }
    case ACTIONS_TYPES.NUM_MINE: {
      return {
        ...state,
        num: state.num - action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default taskReducer;
