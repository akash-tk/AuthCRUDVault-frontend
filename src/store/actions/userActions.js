import axios from 'axios';

export const clearErrors = () => ({ type: 'CLEAR_ERRORS' });

export const createUser = (user) => async (dispatch) => {
  dispatch(clearErrors());
  dispatch({ type: 'CREATE_USER_REQUEST' });
  try {
    const response = await axios.post('http://localhost:3000/api/users', user);
    dispatch({ type: 'CREATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    const errorMessage = error.response?.status === 400
      ? error.response.data.message
      : error.response?.data?.message || error.message;
    dispatch({ type: 'CREATE_USER_FAILURE', payload: errorMessage });
  }
};

export const updateUser = (id, user) => async (dispatch) => {
  dispatch(clearErrors());
  dispatch({ type: 'UPDATE_USER_REQUEST' });
  try {
    const response = await axios.put(`http://localhost:3000/api/users/${id}`, user);
    dispatch({ type: 'UPDATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    const errorMessage = error.response?.status === 400
      ? error.response.data.message
      : error.response?.data?.message || error.message;
    dispatch({ type: 'UPDATE_USER_FAILURE', payload: errorMessage });
  }
};

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  try {
    const response = await axios.get('http://localhost:3000/api/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};

export const fetchUser = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_USER_REQUEST' });
  try {
    const response = await axios.get(`http://localhost:3000/api/users/${id}`);
    dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch(clearErrors());
  dispatch({ type: 'DELETE_USER_REQUEST' });
  try {
    await axios.delete(`http://localhost:3000/api/users/${id}`);
    dispatch({ type: 'DELETE_USER_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_USER_FAILURE', payload: error.message });
  }
};