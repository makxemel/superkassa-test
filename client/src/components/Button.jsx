import React from 'react';
import { connect } from 'react-redux';
import { switchButtonStatus } from '../redux/actions/switchButtonStatus';

const Button = ({ buttonStatus, switchButtonStatus }) => {
  const onClickhandler = (e) => {
    e.preventDefault();
    switchButtonStatus();
  };

  return (
    <div className="button">
      <button onClick={onClickhandler}>{buttonStatus ? 'ON' : 'OFF'}</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    buttonStatus: state.buttonStatus,
  };
};

export default connect(mapStateToProps, { switchButtonStatus })(Button);
