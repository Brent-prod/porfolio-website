import React from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import References from './components/references/References';
// import Works from './components/works/Works';
import './app.scss'; // for style of this div app and sections
import { useState } from 'react'; // used for the hambugrer state
import Menu from './components/menu/Menu';

function App() {
	const [menuOpen, setMenuOpen] = useState(false); // for the hambuger state
	return (
		<div className="app">
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="sections">
				<Intro />
				<Portfolio />
				{/* <Works /> */}
				<References />
				<Contact />
			</div>
		</div>
	);
}

export default App;
