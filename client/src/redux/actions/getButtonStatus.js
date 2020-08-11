import { GET_BUTTON_STATUS } from '../types/types';

export const getButtonStatus = (payload) => {
  return {
    type: GET_BUTTON_STATUS,
    payload,
  };
};
