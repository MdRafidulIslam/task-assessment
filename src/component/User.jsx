import React from 'react';

const User = ({ user }) => {
    const { name, id, email } = user
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default User;