const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
  params: {
    cat: 'movies',
    count: '10'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
