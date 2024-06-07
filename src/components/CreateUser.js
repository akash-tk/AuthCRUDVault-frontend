import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/actions/userActions';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ username, email }));
    setUsername('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create User</h1>
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
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;