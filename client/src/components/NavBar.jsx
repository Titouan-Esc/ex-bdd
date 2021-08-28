import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home page</NavLink>
                <NavLink to="/post-form">Post Form</NavLink>
            </nav>
        </header>
    )
}

export default NavBar
