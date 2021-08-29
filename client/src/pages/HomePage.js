import React from 'react'

const HomePage = () => {
    return (
        <section className="home_page">
            <h1 className="titre">Home Page</h1>

            <div className="post">
                <h1>Premier post</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis repellat laboriosam rem adipisci tempore ipsam consequuntur fugit quae quaerat.</p>
                <div className="button">
                    <button className="btn1">Modifier</button>
                    <button className="btn2">Supprimer</button>
                </div>
            </div>
        </section>
    )
}

export default HomePage
