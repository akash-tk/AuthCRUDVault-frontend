const initialState = {
    users: [],
    user: null,
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_REQUEST':
      case 'FETCH_USER_REQUEST':
      case 'CREATE_USER_REQUEST':
      case 'UPDATE_USER_REQUEST':
      case 'DELETE_USER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_USERS_SUCCESS':
        return {
          ...state,
          loading: false,
          users: action.payload,
        };
      case 'FETCH_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
      case 'CREATE_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          users: [...state.users, action.payload],
        };
      case 'UPDATE_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          users: state.users.map((user) =>
            user._id === action.payload._id ? action.payload : user
          ),
        };
      case 'DELETE_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          users: state.users.filter((user) => user._id !== action.payload),
        };
      case 'FETCH_USERS_FAILURE':
      case 'FETCH_USER_FAILURE':
      case 'CREATE_USER_FAILURE':
      case 'UPDATE_USER_FAILURE':
      case 'DELETE_USER_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'CLEAR_ERRORS':
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;