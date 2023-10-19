import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const [newUser, setNewUser] = useState()
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    })
    return (
        <div>
            <h2>User details ID : {newUser?.id}</h2>
            <h3>Name : {newUser?.name}</h3>
            <p>Username : {newUser?.username}</p>
            <h3>Email: {newUser?.email}</h3>
            <h5>Phone : {newUser?.phone}</h5>
            <address>City : {newUser?.address?.city}</address>


        </div>
    );
};

export default UserDetails;