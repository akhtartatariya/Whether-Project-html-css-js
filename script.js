const url = 'https://airvisualraygorodskijv1.p.rapidapi.com/getCity';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'AirVisualraygorodskijV1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		state: '<REQUIRED>',
		country: '<REQUIRED>',
		city: '<REQUIRED>'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}