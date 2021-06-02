import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = ({projects}) => (
    <div id="navbar" class="navbar flex-center">
        <div class="navbar__Link navbar__Link-toggle">
            <i class="fas fa-bars">Menu</i>
        </div>

    <nav className="Navbar__Items social flex-center">
        <ul>
            <li className="navbar__link"><Link to="/">Home</Link></li>
        {projects.map((project) => (
            <li className="navbar__link"><Link to={`#${project.id}`}>{project.name}</Link></li>
        ))}
        </ul>
    </nav>

    </div>
);

export default Navigation;