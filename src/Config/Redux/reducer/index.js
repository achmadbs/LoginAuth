const initialState = {
  popUpShow: false,
  isLogin: false,
  isLoading: false,
  userName: 'Achmad'
}

const reducer = (state=initialState, action) => {
  if(action.type === 'CHANGE_POPUP') {
    return {
      ...state,
      popUpShow: action.value
    }
  }
  if(action.type === 'CHANGE_ISLOGIN') {
    return {
      ...state,
      isLogin: action.value
    }
  }
  if (action.type === 'CHANGE_USER') {
    return {
      ...state,
      userName: action.value
    }
  }
  if (action.type === 'CHANGE_LOADING') {
    return {
      ...state,
      isLoading: action.value
    }
  }
  return state;
}

export default reducer;