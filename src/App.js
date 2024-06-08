import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import Auth from './components/Auth';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import FileUpload from './components/FileUpload';
import FileDownload from './components/FileDownload';
import LogoutButton from './components/LogoutButton';
import ProtectedRoute from './components/ProtectedRoute';
import './styles.css';

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleEdit = (userId) => {
    setSelectedUserId(userId);
  };

  const handleClear = () => {
    setSelectedUserId(null);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <h1>User Management</h1>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );

  function Dashboard() {
    return (
      <div>
        <LogoutButton />
        <UserForm userId={selectedUserId} onClear={handleClear} />
        <UserList onEdit={handleEdit} />
        <FileUpload />
        <FileDownload />
      </div>
    );
  }
};

export default App;