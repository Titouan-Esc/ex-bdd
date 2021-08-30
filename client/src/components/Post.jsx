// import React, { useState, useEffect } from 'react';


const Post = ({post}) => {
    return (
        <>
            {post.map((c) => {
                
                const {_id, title, content} = c;

                return(
                    <div className="post" key={_id}>
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <div className="button">
                            <button className="btn1">Modifier</button>
                            <button className="btn2">Supprimer</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Post
