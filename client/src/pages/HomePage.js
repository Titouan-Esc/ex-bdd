import Post from '../components/Post';
import React, { useState, useEffect } from 'react';


const HomePage = () => {

    const [post, setPost] = useState([]);

    return (
        <section className="home_page">
            <h1 className="titre">Home Page</h1>

            <Post post={post}/>
        </section>
    )
}

export default HomePage
