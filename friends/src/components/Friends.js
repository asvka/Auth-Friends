import React, { useState, useEffect } from 'react';

import FriendCard from './FriendCard';
import axiosWithAuth from './../utils/axiosWithAuth';
import AddFriend from './AddFriend';

export default function Friends() {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data);
        })
        .catch(err => {
            console.error(err);
        })
    }, []);

    return(
        <div>
        <AddFriend />
        {friends.map(({name, age, email}, index) => {
            console.log(friends);
            return <FriendCard
                    key={index}
                    name={name}
                    age={age}
                    email={email}
            />;
        })}
        </div>
    );
}