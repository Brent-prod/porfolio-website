import './contact.scss';
import { useState } from 'react';

export default function Contact() {
	const [ message, setMessage ] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault(); // this it to prevent the page to reload when hitting the send button
		setMessage(true);
	};
	return (
		<div className="contact" id="contact">
			<div className="left">
				<img
					src="assets/handShake.png"
					alt="" // find a new image for this page or remove it completely
				/>
			</div>
			<div className="right">
				<h2>Contact Me.</h2>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Email" />
					<textarea placeholder="Message" />
					<button type="submit">Send</button>
					{message && <span>Thanks, I'll reply ASAP :)</span> // this will happen only after the state has been set to true
					}
				</form>
			</div>
		</div>
	);
}
