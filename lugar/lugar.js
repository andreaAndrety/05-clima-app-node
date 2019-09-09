const axios = require('axios');

const getLugarLatitud = async(dir) => {

    const encodeUrl = encodeURI(dir);


    const instace = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { "x-rapidapi-key": "6492b5bee5msh65b77a80cfcdd15p147c2fjsn485a88047054" }
    });


    const resp = await instace.get();

    if (resp.data.Results.length === 0) {
        throw new Error('no hay resultado para la cuidad :', direccion)
    } else {

    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    // instace.get().then(resp => {
    //     console.log(resp.data.Results[0]);
    // }).catch(err => {
    //     console.log('error', err);
    // });
    return {
        direccion,
        lat,
        lng

    }

}

module.exports = {
    getLugarLatitud
}