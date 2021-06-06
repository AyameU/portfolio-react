import React from 'react';
import ProjectList from '../components/ProjectList';
import TestData from './TestData';

const Portfolio = () => (
    <>
        <section id="projects">
			<header className="section-header">
				<span className="accent">// freeCodeCamp</span>
				<h3>Projects</h3>
			</header>

			<div className="grid">
				<ProjectList projects={TestData} />
			</div>
		</section>
    </>
);

export default Portfolio;