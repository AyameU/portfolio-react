import React from 'react';
import Navigation from '../components/Navigation.js';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import TestData from './TestData';

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
            <Portfolio />
		</main>
        <Footer />
    </>
);

export default Home;