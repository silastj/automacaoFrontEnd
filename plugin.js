function imc(peso,altura){
    let imc = peso / (altura * altura);
    return imc.toFixed(2);    
}
//exporta o module.exports
module.exports.imc = imc;
console.log(imc(80, 1.8));




function quadrado(numero){
    let quadrado = numero * numero;
    return quadrado;
}

module.exports.quadrado = quadrado;