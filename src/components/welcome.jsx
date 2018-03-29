import React from 'react';
import { Link } from 'react-router-dom'

const Welcome = (props) =>
    <div >
        <h1 >{props.title ? props.title : "Welcome To React"}</h1>
        <h5 >{props.message ? props.message :"This Is Const Message component"}</h5>
        <Link to='/all-users'>Show All Users</Link>
    </div>

export default Welcome;