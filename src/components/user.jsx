import React from 'react';

const User = ({user}) =>
    <div className="user">
        <div>{user.name ? user.name : "Name Not Given"}</div>
        <div>{user.location ? user.location :"Location Not Given"}</div>
    </div>

export default User;