import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, email, city, id } = props.friend;
      const navigate = useNavigate();
    const showFriend = () => {
        const path = `/friend/${id}`;
        navigate(path)
    }
    return (
      <div>
        <p>name{name}</p>
        <h1>User Name: {username}</h1>
            <button onClick={showFriend}>Bret-Id: { id}</button>
      </div>
    );
};

export default Friend;