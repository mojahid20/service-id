import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostsDatal = () => {
    const{postid}= useParams();
    const [post,setPost]=useState({})
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postid}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setPost(data))

    },[post])
   
    return (
        <div>
            <h1>welcome to post datils {postid}</h1>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
        </div>
    );
};

export default PostsDatal;