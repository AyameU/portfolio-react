import {HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

const Navigation = ({projects}) => (
    <div id="navbar" className="navbar">
        <div className="navbar__Link navbar__Link-toggle" onClick={classToggle}>
            <i className="fas fa-bars">Menu</i>
        </div>

        <div className="navbar__Items">
            <nav>
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
                <ul className="social-icons">
                    <li className="navbar__social"><a href="https://github.com/AyameU" target="_blank"><FaGithubSquare size="2rem" /></a></li>
                    <li className="navbar__social"><a href="https://www.linkedin.com/in/ayameulrich/" target="_blank"><FaLinkedin size="2rem" /></a></li>
                </ul>
            </nav>
        </div>

    </div>
);

function classToggle() {
    const navs = document.querySelectorAll('.navbar__Items')

    navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
}

export default Navigation;