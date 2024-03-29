import React from 'react';
import './references.scss';

// Your component code goes here

export default function References() {
	const data = [
		{
			id: 1,
			name: 'Alfredo Pasquariello',
			title: 'Sonoma Sales Manager',
			img:
				'assets/alfredo.jpeg',
			icon: 'assets/linkedin.png',
			desc: 'Silvio was always cheerful and dependable, completely loyal and trustworthy, punctual and hardworking'
		},
		{
			id: 2,
			name: 'Jeremy Courmadias',
			title: 'Fink Group General Manager',
			img:
				'assets/jeremy.jpeg',
			icon: 'assets/linkedin.png',
			desc:
				'Silvio is a creative problem-solver, gets along well with others and has outstanding leadership skills',
			featured: true
		},
		{
			id: 3,
			name: 'Gary Willis',
			title: 'F.MAYER Division Manager',
			img:
				'assets/gary.jpeg',
			icon: 'assets/linkedin.png',
			desc: 'Silvio showed a very high work ethic, proved to be very honest and reliable and had a passion for the role',
			// lkdin: "https://www.linkedin.com/in/garywillis64/"
		}
	];

	return (
		<div className="references" id="references">
			<h1>References</h1>
			<div className="container">
				{data.map((d) => (
					<div
						className={d.featured ? 'card featured' : 'card'} // ternary operator to choose either one or the other className
					>
						<div className="top">
							<img src="assets/right-arrow.png" className="left" alt="" />
							<img className="user" src={d.img} alt="" />
							<img className="right" src={d.icon} alt="" />
						</div>
						<div className="center">{d.desc}</div>
						<div className="bottom">
							<h3>{d.name}</h3>
							<h4>{d.title}</h4>
							{/* <h5>{d.lkdin}</h5> */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
