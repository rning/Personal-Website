import React from 'react';
import './index.css';
import logo from './RXN-Logo-512.png';


const About = () => (
	<div className="page width-normal">
		<img
		    className="big-logo"
			src={logo}
			srcSet="./RXN-Logo-512.png 407w"
			sizes="(min-width: 512px) 256px, 50vw"
			alt="Rafael Ning"
		/>

		<h1 className="no-margin-top">
			About
		</h1>

		<p>
			Hello! I'm <b>Rafael X.S. Ning</b>, a senior computer science student at UCLA.
		</p>

		<p>
			Except for a couple years spent in Japan attending St. Mary's International School, I have lived in Los Angeles for my entire life, attending middle and high school at Chadwick School.
		</p>

		<p>
			Now at UCLA, I am a member of the Upsilon Pi Epsilon computer science honor society, and I enjoy introducing freshman engineering students to UCLA as a MentorSEAS mentor.
		</p>

		<p>
			I am currently interested in <b>career opportunities</b> utilizing my technical, creative critical-thinking, and interpersonal skills in the intersection of <b>computer science and entrepreneurship</b>.
		</p>
	</div>
);

// Ebay Extraordinaire
// Aspiring Entrepreneur
// Car Enthusiast
// Professional Napper
// Dog-Lover
// Deluded Soccer Star
// Family Tech Support Hotline
// Amateur Handyman

export default About;
