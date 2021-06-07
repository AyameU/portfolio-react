import React from 'react';

const Contact = () => (
    <>
        <section id="contact">
            <header className="section-header">
				<span className="accent">// Contact</span>
				<h3>Get in Touch</h3>
			</header>
            <p>A cool form will go here.</p>
            <form action="">
                <label>Name*
                <input type="text"></input>
                </label>
                
                <label>Email*
                <input type="email"></input>
                </label>

                <label>Message*
                <input type="textarea" rows="5"></input>
                </label>
                
                <input type="submit"></input>
            </form>
        </section>
    </>
);

export default Contact;