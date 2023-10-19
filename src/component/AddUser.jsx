import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AddUser = () => {
    const [users, setUsers] = useState()
    const navigate = useNavigate()


    const addUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const username = event.target.username.value;
        const phone = event.target.phone.value;
        const newUser = { name, email, username, phone }
        setUsers(newUser)
        console.log(name, email, username, phone)
        navigate('/')

    }

    useEffect(() => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ users })
        };
        fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
            .then(response => response.json())



    }, []);

    return (
        <div>
            <form onSubmit={addUser}>

                <h2>Added user</h2>
                <h4>Name: <input type="text" placeholder='enter your name' name='name' /></h4>
                <h4>email: <input type="text" placeholder='enter your email' name='email' /> </h4>
                <h4>UserName: <input type="text" placeholder='enter your username' name='username' /></h4>
                <h4>Phone: <input type="text" placeholder='enter your phoneNumber' name='phone' /></h4>
                <input type="submit" value="Submit" />
            </form>

        </div>

    );
};

export default AddUser;