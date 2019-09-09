const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b798d881b1a36eaa15c273c270035727&units=metric`)



    return resp.data.main.temp;

}

module.exports = {
    getClima
}