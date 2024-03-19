import React from 'react';

function UserItem({ user }) {
    const userItemStyle = {
        color: 'orange', 
        fontWeight: 'bold' 
        
      };
  return (
    <div style={userItemStyle}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>UserName: {user.username}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserItem;