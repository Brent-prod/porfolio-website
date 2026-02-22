import React from 'react';
import './contact.scss';
import { useState } from 'react';
import postToGoogle from '../../submitToGoogle';

export default function Contact() {
	const [status, setStatus] = useState('idle');
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		website: '',
		message: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault(); // this it to prevent the page to reload when hitting the send button
		setStatus('submitting');
		try {
			await postToGoogle(formData);
			setStatus('success');
		} catch (err) {
			setStatus('error');
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
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
				{status !== 'success' &&
					<><h2>Contact Me.</h2>
						<form onSubmit={handleSubmit}>
							<input
								placeholder="Your Name"
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
							<input
								placeholder="Your Email Address"
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<input
								placeholder="Your Phone Number (optional)"
								type="tel"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
							/>
							<input
								placeholder="Your Web Site (optional)"
								name="website"
								value={formData.website}
								onChange={handleChange}
							/>
							<textarea
								placeholder="Type your message here...."
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
							/>
							<button type="submit" disabled={status === 'submitting'}>
								{status === 'submitting' ? 'Sending...' : 'Send'}
							</button>
						</form></>
				}
				{status === 'success' && <span className="status success">Thanks, I'll reply ASAP :)</span>}
				{status === 'error' && (
					<span className="status error">Sorry, something went wrong. Please try again.</span>
				)}
			</div>
			{/* <footer>© 2021 Brentan Productions</footer> */}
		</div>
	);
}
