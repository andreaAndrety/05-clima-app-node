const lugar = require('./lugar/lugar.js')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;
const clima = require('./clima/clima.js')



console.log(argv.direccion);

// lugar.getLugarLatitud(argv.direccion)
//     .then(console.log);

// clima.getClima(3.030000, -75.169998).then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        let data = await lugar.getLugarLatitud(direccion);
        let climaDireccion = await clima.getClima(data.lat, data.lng);
        return `El clima de ${direccion} es de :${climaDireccion}`;
    } catch (e) {
        return `no se pudo obtener el clima de : ${direccion}`;
    }


};
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);