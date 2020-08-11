import socket from '../socket';
import { SWITCH_BUTTON_STATUS } from '../types/types';
import { getButtonStatus } from '../actions/getButtonStatus';

export const Middleware = (store) => {
  return (next) => (action) => {
    const result = next(action);

    if (socket && action.type === SWITCH_BUTTON_STATUS) {
      socket.emit('switchStateOfButton');
    }

    return result;
  };
};

export const start = (store) => {
  socket.on('getStateOfButton', ({ btn }) => {
    console.log(btn);
    store.dispatch(getButtonStatus(btn));
    console.log(store.getState());
  });
};
