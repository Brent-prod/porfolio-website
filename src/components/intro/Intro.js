import React from 'react';
import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
	const textRef = useRef(); // useRef() holds a mutable value in it's .current property. And then we can use it as we wish in the component

	useEffect(() => { // useEffect() is a React Hook similar to componentDidMount & componentDidUpdate
		init(textRef.current, {
			showCursor: true, // built in settings from iTyped library
			backDelay: 1500,
			backSpeed: 60,
			strings: ['Engineer', 'Developer', 'Creator']
		});
	}, []);

	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/brentBust.png" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I'm</h2>
					<h1>Brent.</h1>
					<h3>
						Software <span ref={textRef} />
					</h3>
				</div>
				<a href="#portfolio">
					<img
						src="assets/down.png"
						alt=""
					/>
				</a>
			</div>
		</div>
	);
}
