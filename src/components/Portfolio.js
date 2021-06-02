import React from 'react';
import ProjectList from './ProjectList';
import Project from './Project';
import TestData from '../pages/TestData';

const Portfolio = () => (
    <>
        <section id="projects">
				<header className="section-header">
					<span className="accent">// freeCodeCamp</span>
					<h2>Projects</h2>
				</header>

				<div className="grid">
                    <ProjectList projects={TestData} />
				</div>
			</section>
    </>
);

export default Portfolio;