class Parametros {
calcWeight(valores, parametros) {
    //[ - / + ]
    let negativo = valores[0]
    let positivo = valores[1]

    let peso = parametros[0]
    if (peso < 18000){
        let quant = (18000 - peso) / 1000
        let adicao = quant * negativo
        return adicao
    } else {
        let quant = (peso - 18000) / 1000
        let adicao = quant * positivo
        return adicao
    }
}

calcWind(valores, parametros){
    let windDirection = parametros[0]
    let wind = parametros[1]
    let opcao = valores[windDirection]

    // headwind: 0; tailwind: 1
    // a cada 5kt
    return (wind / 5) * opcao
}

calcTemp(valores, parametros){
    let negativo = valores[0];
    let positivo = valores[1];

    let temp = parametros[0]/5
    if (temp < 0) {
        return (temp * -1) * negativo
    } else {
        return temp * positivo
    }
}

calcAlt(valores, parametros){
    let positivo = valores[0]
    let alt = parametros[0]

    return (alt / 1000) * positivo;
}

calcSlope(valores, parametros){
    console.log(valores)
    console.log(parametros)
    let opcao = valores[parametros[0]]
    let angulo = parametros[1]
    if (angulo < 1) {
        let anguloNovo = Math.floor(angulo * 10)
        let resultado = opcao * anguloNovo
        return resultado / 10
    } else {
        return opcao * angulo
    }
}

calcOverspeed(valores, parametros){
    let positivo = valores[0]
    let overspeed = parametros[0]

    return (overspeed / 5) * positivo
}

calcRevInop(valores, parametros) {
    let positivo = valores[0]
    let opcao = parametros[0]

    return opcao * positivo;
}}

module.exports = Parametros