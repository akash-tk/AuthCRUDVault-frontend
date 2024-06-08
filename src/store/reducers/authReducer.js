const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER_REQUEST':
      case 'REGISTER_USER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'LOGIN_USER_SUCCESS':
      case 'REGISTER_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
      case 'LOGIN_USER_FAILURE':
      case 'REGISTER_USER_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'LOGOUT_USER':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;