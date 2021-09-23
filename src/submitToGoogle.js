import axios from 'axios';

function postToGoogle() {
	var field1 = document.querySelector('#Name').value;
	var field2 = document.querySelector('#Email').value;
	var field3 = document.querySelector('#Phone').value;
	var field4 = document.querySelector('#Website').value;
	var field5 = document.querySelector('#Message').value;

	return axios({
		url:
			'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeDqYgnfj4oRbe2BxHo9CyJpAjDamuLOUt_gO7p8-bFOtsfTw/formResponse',
		params: {
			'entry.150345244': field1,
			'entry.751255685': field2,
			'entry.127353653': field3,
			'entry.1892483773': field4,
			'entry.1524902182': field5
		},
		method: 'post'
	});
}

export default postToGoogle;
