import React from 'react'

const PostForm = () => {
    return (
        <section className="post_form">
            <form className="formulaire">
                <div className="contenu">
                    <label htmlFor="title">Titre du poste</label>
                    <input type="text" name="title"/>
                </div>
                <div className="contenu">
                    <label htmlFor="content">Contenu</label>
                    <textarea name="content" cols="30" rows="10"></textarea>
                </div>
                <button className="submit">Créer</button>
            </form>
        </section>
    )
}

export default PostForm
