
import axios from 'axios';


export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';


export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';


export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });

  try {
    const response = await axios.post('http://localhost:3000/register', userData);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshToken', response.data.refreshToken);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data });
  }
};


export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  try {
    const response = await axios.post('http://localhost:3000/login', userData);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshToken', response.data.refreshToken);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data });
  }
};