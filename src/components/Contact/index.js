import React from 'react';
import './index.css';
import linkedinLogo from './LinkedIn-Icon-128.png';
import githubLogo from './GitHub-Icon-128.png';

import * as ROUTES from '../../constants/routes';


const Contact = () => (
	<div className="page width-normal">
		<h1>Contact</h1>

		<p>
			To contact me about any opportunities or to request a copy of my resume, please email me at <b>rafaelning [at] gmail.com</b>.
		</p>

		<div className="links">
			<a
				className="image-link"
				href={ROUTES.GITHUB}
			>
				<img
					src={githubLogo}
					alt={ROUTES.GITHUB}
				/>
			</a>

			<a
				className="image-link"
				href={ROUTES.LINKEDIN}
			>
				<img
					src={linkedinLogo}
					alt={ROUTES.LINKEDIN}
				/>
			</a>
		</div>
	</div>
);

export default Contact;
