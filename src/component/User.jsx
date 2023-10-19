import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const { name, email } = user
    const navigate = useNavigate();
    const handleUserDetails = (user) => {
        navigate(`/userDetails/${user.id}`)
    }
    const handleDelete = user => {

    }
    return (
        <div>
            <li>Name: {name} || Email : {email}</li>
            <button onClick={() => handleUserDetails(user)}>view more details</button>
            <button onClick={() => handleDelete(user)}>X</button>

        </div>
    );
};

export default User;