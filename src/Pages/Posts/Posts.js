import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [Posts,setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=> setPosts(data))
    },[])
    return (
        <div style={{textAlign:'center'}}>
            <h2>all Post {Posts.length} </h2>
            {
                Posts.map(post=> <Link to={`/posts/${post.id}`}
               
                >
                    {post.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;