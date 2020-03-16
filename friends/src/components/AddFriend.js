import React , { useState } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

import { Spinner } from 'reactstrap';

export default function AddFriend (props) {
    const [ addFriend, setAddFriend ] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    });

    const handleChange = (e) => {
        setAddFriend({
                ...addFriend,
                [e.target.name]: e.target.value
        });
    };

    const submitNewFriend = (e) => {
        // e.preventDefault();
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", addFriend)
            .then((res) => {
                console.log(res);
            })
            .catch(err => console.error(err));
            resetAddForm();

    };

    const resetAddForm = () => {
        setAddFriend(addFriend);
    };

    return (
        <div>
            <form onSubmit={submitNewFriend}>
            <input
                type="text"
                placeholder="name"
                name="name"
                value={addFriend.name}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="age"
                name="age"
                value={addFriend.age}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="email"
                name="email"
                value={addFriend.email}
                onChange={handleChange}
            />
            <button type='submit'>Add new friend!</button>
            </form>
        </div>
    )
}