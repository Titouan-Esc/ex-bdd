import React, { useState } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';



const PostForm = () => {

    const [submit, setSubmit] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);

        axios.post("http://localhost:3001/api/v1/posts/", formData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

        setSubmit(true);

        console.log({title, content, formData});

        // setRedirect(true);
    }


    // if(setRedirect) {
    //     return <Redirect to="/"/>
    // }


    return (
        <section className="post_form">
            <form className="formulaire" onSubmit={handleSubmit}>
                <div className="contenu">
                    <label htmlFor="title">Titre du poste</label>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="contenu">
                    <label htmlFor="content">Contenu</label>
                    <textarea name="content" cols="30" rows="10" value={content} onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <button className="submit" type="submit">Créer</button>
            </form>
        </section>
    )
}

export default PostForm
