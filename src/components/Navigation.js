import React from 'react';
import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';

const Navigation = ({projects}) => (
    <div id="navbar" className="navbar flex-center">
        <div className="navbar__Link navbar__Link-toggle" onClick={classToggle}>
            <i className="fas fa-bars">Menu</i>
        </div>

        <nav className="navbar__Items social flex-center">
            <ul>
                <li className="navbar__link"><Link to="/">Hello</Link></li>
                <li className="navbar__link"><HashLink to="#projects">Projects</HashLink></li>
                <ul className="sub-menu">
                    {projects.map((project) => (
                    <li className="navbar__link"><HashLink to={`#${project.id}`}>{project.name}</HashLink></li>
                    ))}
                </ul>
                <li className="navbar__link"><HashLink to="#design">Design</HashLink></li>
            </ul>
        </nav>

    </div>
);

function classToggle() {
    const navs = document.querySelectorAll('.navbar__Items')

    navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
}

export default Navigation;