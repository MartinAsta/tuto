// src/App.jsx
import React from 'react';
import ProfileDisplay from './components/ProfileDisplay';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Profiles</h1>
      <ProfileDisplay />
    </div>
  );
};

export default App;
