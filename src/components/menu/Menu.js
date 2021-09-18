import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
	return (
		<div
			className={'menu ' + (menuOpen && 'active')} // to change the class of the menu bar
		>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#intro">Home</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#portfolio">Portfolio</a>
				</li>
				{/* <li onClick={()=>setMenuOpen(false)}>
               <a href="#works">Works</a>
            </li> */}
				<li onClick={() => setMenuOpen(false)}>
					<a href="#references">References</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
}
