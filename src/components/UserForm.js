import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser, fetchUser, clearErrors } from '../store/actions/userActions';

const UserForm = ({ userId, onClear }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (user && user._id === userId) {
      setUsername(user.username);
      setPassword('');
    }
  }, [user, userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      dispatch(updateUser(userId, { username, password }));
    } else {
      dispatch(createUser({ username, password }));
    }
    onClear();
  };

  const handleInputChange = (setter) => (e) => {
    dispatch(clearErrors());
    setter(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleInputChange(setUsername)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handleInputChange(setPassword)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {userId ? 'Update User' : 'Create User'}
      </button>
      {error && <p>{error}</p>}
      {userId && <button type="button" onClick={onClear}>Clear</button>}
    </form>
  );
};

export default UserForm;