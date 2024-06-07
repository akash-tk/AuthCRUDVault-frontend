import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions/userActions';

const UpdateUser = ({ user }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(user._id, { username, email }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update User</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;