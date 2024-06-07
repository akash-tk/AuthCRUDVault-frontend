import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../store/actions/authActions';

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      dispatch(registerUser({ username, password }));
    } else {
      dispatch(loginUser({ username, password }));
    }
  };

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {isRegistering ? 'Register' : 'Login'}
        </button>
        {error && <p>{error}</p>}
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Already have an account? Login' : 'New user? Register'}
      </button>
    </div>
  );
};

export default Auth;