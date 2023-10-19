import React, { useEffect, useState } from 'react';
import User from './User';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const handleAddUser = () => {
        navigate('/addUser')
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>User List length : {users.length}</h1><button onClick={handleAddUser}>AddUser</button>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;