import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Design from './Design';
import Contact from './Contact';
import TestData from './TestData';
import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer';


const Home = () => (
    <>
        <Navigation projects={TestData}/>
        <main>
			<section id="welcome-section">
				<header>
					<span className="accent">// Ayame Ulrich</span>
					<h1>Portfolio</h1>
				</header>
				<figure className="welcome"></figure>
			</section>
			<About />
            <Portfolio />
			<Design />
			<Contact />
		</main>
        <Footer />
    </>
);

export default Home;