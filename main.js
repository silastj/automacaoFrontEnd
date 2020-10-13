//importa o imc
const plugin = require('./plugin');
const moment = require('moment');

//passar nos parametros
console.log(plugin.imc(10, 1.90));
console.log(plugin.imc);



console.log(plugin.quadrado(5));
console.log(moment().format());