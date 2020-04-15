import firebase from '../../Firebase';

export const handleLoginForm = (data) => async(dispatch) => {
  try {
    dispatch({type: 'CHANGE_LOADING', value: true});
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({type: 'CHANGE_LOADING', value: false});
  }
  catch (e) {
    const errorCode = e.message
    alert(errorCode);
    dispatch({type: 'CHANGE_LOADING', value: false});
  }
}

