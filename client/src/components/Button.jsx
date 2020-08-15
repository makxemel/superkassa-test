import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchButtonStatus } from '../redux/actions/switchButtonStatus';

const Button = () => {
  const dispatch = useDispatch();
  const buttonStatus = useSelector((state) => state.buttonStatus);

  const onClickhandler = (e) => {
    e.preventDefault();
    dispatch(switchButtonStatus());
  };

  return (
    <div className="button">
      <button onClick={onClickhandler}>{buttonStatus ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default Button;
