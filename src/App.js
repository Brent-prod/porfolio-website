import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Works from './components/works/Works';
import './app.scss'; // for style of this div app and sections

function App() {
	return (
		<div className="app">
        <Topbar />
			<div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
		</div>
	);
}

export default App;
