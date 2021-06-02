import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = ({projects}) => (
    <nav className="Navbar__Items--right social flex-center">
        <ul>
            <li className="navbar__link"><Link to="/">Home</Link></li>
        {projects.map((project) => (
            <li className="navbar__link"><Link to={`#${project.id}`}>{project.name}</Link></li>
        ))}
        </ul>
    </nav>
);

export default Navigation;