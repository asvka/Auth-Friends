import React , { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function Login ( props ) {

    const [userData, setUserData] =  useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setUserData({
                ...userData,
                [e.target.name]: e.target.value
        });
    };



    const login = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("http://localhost:5000/api/login", userData)
            .then((res) => {
                console.log(res.data.payload);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <form onSubmit={login}>
            <input
                type="text"
                placeholder="username"
                name="username"
                value={userData.username}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
            />
            <button type='submit'>Log in</button>
            </form>
        </div>
        );
    };


