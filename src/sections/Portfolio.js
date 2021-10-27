import ProjectList from '../components/ProjectList';
import PortfolioData from '../data/PortfolioData';

const Portfolio = () => (
    <>
        <section id="projects">
			<header className="section-header">
				<span className="accent">// freeCodeCamp</span>
				<h3>Projects</h3>
			</header>

			<ProjectList projects={PortfolioData} />
		</section>
    </>
);

export default Portfolio;