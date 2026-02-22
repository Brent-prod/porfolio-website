import axios from 'axios';

function postToGoogle({ name, email, phone, website, message }) {
	return axios({
		url:
			'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeDqYgnfj4oRbe2BxHo9CyJpAjDamuLOUt_gO7p8-bFOtsfTw/formResponse',
		params: {
			'entry.150345244': name,
			'entry.751255685': email,
			'entry.127353653': phone,
			'entry.1892483773': website,
			'entry.1524902182': message
		},
		method: 'post'
	});
}

export default postToGoogle;
