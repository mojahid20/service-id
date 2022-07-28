import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
const Datils = () => {
    const {id}=useParams();
    const [friend,setFriend]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h2>welcome to datails {id}</h2>
            <p>name: {friend.name}</p>
            <p>username: {friend.username}</p>
            <p>emal: {friend.email}</p>
            <p>address: {friend.address?.city}</p>
            <p></p>
            <p></p>
        </div>
    );
};

export default Datils;