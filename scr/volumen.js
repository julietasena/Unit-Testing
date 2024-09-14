function volumen(d,a,unidad){
    if (unidad === 'cm') {
        d /= 100; 
        a /= 100;   
    }
    const resultado = (Math.PI * Math.pow(d/2, 2) * a);
    return Number(resultado.toFixed(2));
}

module.exports = volumen