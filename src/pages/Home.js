import React from 'react';
import Portfolio from '../components/Portfolio.js';

const Home = () => (
    <>
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
    </>
);

export default Home;