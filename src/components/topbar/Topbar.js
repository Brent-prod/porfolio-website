import React from 'react';
import './topbar.scss';
import { Phone, Mail, LinkedIn, GitHub, CloudDownload } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div
			className={'topbar ' + (menuOpen && 'active')} // this is to receive the state status and set the class to active
		>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						brent.
					</a>
					<div className="itemContainer">
						<Phone className="icon" />
						{/* <span>0414 733 121</span> */}
						<span>
							<a href="tel:+61414733121">0414 733 121</a>
						</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						{/* <span>silvio.brntn@gmail.com</span> */}
						<a href="mailto:brentan.productions@gmail.com">brentan.productions@gmail.com</a>
					</div>
					<div className="itemContainer">
						<LinkedIn className="icon" />
						{/* <span>https://www.linkedin.com/in/s-brentan</span> */}
						<a href="https://www.linkedin.com/in/s-brentan">LinkedIn</a>
					</div>
					<div className="itemContainer">
						<GitHub className="icon" />
						{/* <span>https://github.com/Brent-prod</span> */}
						<a href="https://github.com/Brent-prod">GitHub</a>
					</div>
					<div className="itemContainer">
						<CloudDownload className="icon" />
						<a href="https://www.canva.com/design/DAEmNCgUCEY/pWzPBWRKRoZbUhOxbVn-QQ/view?utm_content=DAEmNCgUCEY&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu">
							Resume
						</a>
					</div>
				</div>

				<div className="right">
					<div
						className="hamburger"
						onClick={() => setMenuOpen(!menuOpen)} //on click function to toggle the active status
					>
						<span className="line1" />
						<span className="line2" />
						<span className="line3" />
					</div>
				</div>
			</div>
		</div>
	);
}
