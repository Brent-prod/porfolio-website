function postToGoogle({ name, email, phone, website, message }) {
	const formData = new FormData();
	formData.append('entry.150345244', name);
	formData.append('entry.751255685', email);
	formData.append('entry.127353653', phone);
	formData.append('entry.1892483773', website);
	formData.append('entry.1524902182', message);

	return fetch(
		'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeDqYgnfj4oRbe2BxHo9CyJpAjDamuLOUt_gO7p8-bFOtsfTw/formResponse',
		{
			method: 'POST',
			mode: 'no-cors',
			body: formData
		}
	);
}

export default postToGoogle;
