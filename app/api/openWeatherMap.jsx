var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/find?';

const OPEN_WEATHER_MAP_URL_TEST = "https://samples.openweathermap.org/data/2.5/weather?appid=299d20a4fa0150fa6bbfd2bdb5e29a95";


module.exports = {
    getTemp (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL_TEST}&q=${encodedLocation}`;


        return axios.get(requestUrl).then((res) => {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, (err) => {
            throw new Error('Unable to fetch weather for the location');
        });

    }
}
