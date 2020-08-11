import { GET_BUTTON_STATUS, SWITCH_BUTTON_STATUS } from '../types/types';

let initialState = {
  buttonStatus: null,
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUTTON_STATUS:
      return { ...state, buttonStatus: action.payload };
    case SWITCH_BUTTON_STATUS:
      return state;
    default:
      return state;
  }
};

export default buttonReducer;
