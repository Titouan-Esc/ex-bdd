import Post from '../components/Post';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'http://localhost:3001/api/v1/posts';


const HomePage = () => {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        try {
            const res = await axios.get(url);
            console.log(res.data);
            setPosts(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <section className="home_page">
            <h1 className="titre">Home Page</h1>

            <Post post={posts}/>
        </section>
    )
}

export default HomePage
