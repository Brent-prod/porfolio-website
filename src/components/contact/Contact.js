import './contact.scss';
import { useState } from 'react';
import postToGoogle from '../../submitToGoogle';

export default function Contact() {
	const [ message, setMessage ] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault(); // this it to prevent the page to reload when hitting the send button
		setMessage(true);
		postToGoogle()
		.then(response => {
			// how to reset the form
		})
		.catch(err =>{
			// look up possible err msg to be displayed e.g. ERROR
		})

	};
	return (
		<div className="contact" id="contact">
			<div className="left">
				<img
					src="assets/handShake.png"
					alt="" // I want to find a new image for this page or change style
				/>
			</div>
			<div className="right">
				<h2>Contact Me.</h2>
				<form onSubmit={handleSubmit}>
					<input
						placeholder="Your Name"
						type="text"
						data-name="Name"
						id="Name"
						required
						autoFocus
					/>
					<input
						placeholder="Your Email Address"
						type="email"
						data-name="Email"
						id="Email"
						required
					/>
					<input
						placeholder="Your Phone Number (optional)"
						type="tel"
						data-name="Phone"
						id="Phone"
					/>
					<input
						placeholder="Your Web Site (optional)"
						type="url"
						data-name="Website"
						id="Website"
					/>
					<textarea
						placeholder="Type your message here...."
						data-name="Message"
						id="Message"
						required
					/>
					<button type="submit">Send</button>
					{message && <span>Thanks, I'll reply ASAP :)</span> // this will happen only after the state has been set to true
					}
				</form>
			</div>
		</div>
	);
}
