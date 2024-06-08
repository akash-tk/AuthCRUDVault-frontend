import axios from 'axios';

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: 'REGISTER_USER_REQUEST' });
  try {
    const response = await axios.post('http://localhost:3000/api/user/register', user);
    dispatch({ type: 'REGISTER_USER_SUCCESS', payload: response.data });
  } catch (error) {
    const errorMessage = error.response?.status === 400
      ? 'User already exists'
      : error.response?.data?.message || error.message;
    dispatch({ type: 'REGISTER_USER_FAILURE', payload: errorMessage });
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: 'LOGIN_USER_REQUEST' });
  try {
    const response = await axios.post('http://localhost:3000/api/user/login', credentials);
    dispatch({ type: 'LOGIN_USER_SUCCESS', payload: response.data });
  } catch (error) {
    const errorMessage = error.response?.status === 400
      ? 'Check your password or username'
      : error.response?.data?.message || error.message;
    dispatch({ type: 'LOGIN_USER_FAILURE', payload: errorMessage });
  }
};

export const logoutUser = () => (dispatch) => {
    dispatch({ type: 'LOGOUT_USER' });
  };