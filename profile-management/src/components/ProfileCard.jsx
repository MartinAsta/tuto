import React from 'react';

const ProfileCard = ({ firstName, lastName, email }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <div className="card-body">
        <h5 className="card-title">{firstName} {lastName}</h5>
        <p className="card-text">Email: {email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
