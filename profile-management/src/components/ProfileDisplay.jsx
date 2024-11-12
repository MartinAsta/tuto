import React from 'react';
import ProfileCard from './ProfileCard';
import { users } from '../data/users';

const ProfileDisplay = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {users.map(user => (
        <ProfileCard
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default ProfileDisplay;