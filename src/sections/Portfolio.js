import React from 'react';
import ProjectList from '../components/ProjectList';
import PortfolioData from './PortfolioData';

const Portfolio = () => (
    <>
        <section id="projects">
			<header className="section-header">
				<span className="accent">// freeCodeCamp</span>
				<h3>Projects</h3>
			</header>

			<div className="grid">
				<ProjectList projects={PortfolioData} />
			</div>
		</section>
    </>
);

export default Portfolio;