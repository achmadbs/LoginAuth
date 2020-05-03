import React, { useEffect } from 'react';
import { connect } from 'react-redux'

const Dashboard = ({ getUser, getNewUser }) => {

  // useEffect(() => {
  //   getNewUser()
  // },[getNewUser])

  const changeName = () => {
    setTimeout(() => {
      getNewUser()
    }, 2000)
  }

  return (
    <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      Welcome to Dashboard {getUser}

      <button onClick={changeName}>Change</button>
    </div>
  );
}

const actionState = () => {
  return {
    type: 'CHANGE_USER', value: 'Achmad Badrodin Syawal'
  }
}

const mapStateToProps = ({ userName }) => ({
  getUser: userName
});

const mapStateToDispatch = (dispatch) => ({
  getNewUser: () => dispatch(actionState())
});

export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);