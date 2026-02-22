import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import References from './components/references/References';
import Menu from './components/menu/Menu';
import CSMExam from './components/CSMExam';
import './app.scss';

function MainSite() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="app">
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="sections">
				<Intro />
				<Portfolio />
				<References />
				<Contact />
			</div>
		</div>
	);
}

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainSite />} />
				<Route path="/csm" element={<CSMExam />} />
			</Routes>
		</Router>
	);
}

export default App;