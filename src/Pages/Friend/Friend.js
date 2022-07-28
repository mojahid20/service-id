import React from 'react';
import { Link } from "react-router-dom";
const Friend = (props) => {
    const {name,id}=props.friend;
    return (
        <div>
            <h4>name{name}</h4>
            <Link to={`/friends/`+ id}>click me</Link>
        </div>
    );
};

export default Friend;