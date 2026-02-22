import React, { useEffect, useState } from 'react';
import './portfolio.scss';
import { featuredPortfolio } from '../../data';

export default function Portfolio() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(featuredPortfolio);
	}, []);

	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<div className="container">

				{/* CSM Exam App — pinned first */}
				<div className="item">
					<img
						src="/assets/CsmPracticeExam.png"
						alt="CSM Practice Exam"
					/>
					<a href="/csm" target="_blank" rel="noopener noreferrer">
						<span role="img" aria-label="graduation cap">🎓</span> CSM Practice Exam
					</a>
				</div>

				{/* Existing portfolio items */}
				{data.map((d, i) => (
					<div className="item" key={i}>
						<img src={d.img} alt="" />
						<a
							href={d.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{d.title}
						</a>
					</div>
				))}

			</div>
		</div>
	);
}