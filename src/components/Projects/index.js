import React from 'react';
import './index.css';

import * as ROUTES from '../../constants/routes';


const Projects = () => (
	<div className="page width-normal">
		<h1>Projects</h1>

		<p>
			I am currently in the process of developing my website.
			In the meantime, you may find sample media of my projects in the links below.
		</p>

		<a
			href={ROUTES.GOOGLE_DRIVE_FRIENDZONE}
		>
			<p>
				Google Drive: FriendZone Screenshots
			</p>
		</a>

		<a
			href={ROUTES.YOUTUBE_FRIENDZONE}
		>
			<p>
				Youtube: FriendZone Demonstration Video
			</p>
		</a>

		<a
			href={ROUTES.GOOGLE_DRIVE_ARQUE}
		>
			<p>
				Google Drive: Arque Capital File Hosting
			</p>
		</a>

		<a
			href={ROUTES.PERSONAL_WEBSITE}
		>
			<p>
				GitHub: rafaelning.com
			</p>
		</a>
	</div>
);

export default Projects;
