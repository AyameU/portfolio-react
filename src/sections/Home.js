import Portfolio from './Portfolio';
import Design from './Design';
import PortfolioData from './PortfolioData';
import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer';


const Home = () => (
    <>
        <Navigation projects={PortfolioData}/>
        <main>
			<section id="welcome-section">
				<header>
					<span className="accent">// Ayame Ulrich's Portfolio</span>
					<h1>Hello!</h1>
				</header>
				<figure className="welcome"></figure>
				<p>Hello! My name is Ayame Ulrich. I used to be a print/web designer and got to design a lot of pretty things for some very cool clients. These days, I prefer slinging code to designing branding. I've hung up my Pantone deck and am now a Business Information Technology student (finishing term 3) at RRC Polytech.</p>
				<ul className="list">
					<li>Information Technology Student</li>
					<li>Former print/web designer</li>
					<li>I like colourful things</li>
					<li>Nerd</li>
				</ul>
			</section>
            <Portfolio />
			<Design />
		</main>
        <Footer />
    </>
);

export default Home;