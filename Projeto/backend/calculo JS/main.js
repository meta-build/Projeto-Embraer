let alt, calculo, isa, qtdAbaixo, qtdAcima, reversor, slope, slope2, temp, vap, weight, wind, wind2;
weight = Number.parseFloat(input("Weight: "));
alt = Number.parseFloat(input("Alt: "));
temp = Number.parseFloat(input("Temp: "));
wind = Number.parseFloat(input("Wind: "));
wind2 = Number.parseInt(input("1 - head wind or 2 - tail wind:"));

if (wind2 === 1 || wind2 === 2) {
  slope = Number.parseFloat(input("Slope: "));
  slope2 = Number.parseInt(input("1 - uphill or 2 - downhill: "));

  if (slope2 === 1 || slope2 === 2) {
    vap = Number.parseFloat(input("Vap : "));
    reversor = Number.parseInt(input("Est\u00e1 usando reversor? 1-sim / 2-nao "));

    if (reversor === 1 || reversor === 2) {
      isa = temp - 15;
      qtdAbaixo = 18 - weight;
      qtdAcima = weight - 18;

      if (wind2 === 1 && reversor === 1 && weight <= 18 && slope2 === 1) {
        calculo = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 - 28 * slope / 100 + 115 * vap / 5 + 1426;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 1 && reversor === 1 && weight > 18 && slope2 === 1) {
        calculo = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 - 28 * slope / 100 + 115 * vap / 5 + 1426;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 1 && reversor === 1 && weight > 18 && slope2 === 2) {
        calculo = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 + 278 * slope / 100 + 115 * vap / 5 + 1426;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 1 && reversor === 1 && weight <= 18 && slope2 === 2) {
        calculo = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 + 278 * slope / 100 + 115 * vap / 5 + 1426;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 1 && reversor === 2 && weight <= 18 && slope2 === 1) {
        calculo = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 - 28 * slope / 100 + 115 * vap / 5;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 1 && reversor === 2 && weight > 18 && slope2 === 1) {
        calculo = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 - 28 * slope / 100 + 115 * vap / 5;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 1 && reversor === 2 && weight > 18 && slope2 === 2) {
        calculo = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 + 278 * slope / 100 + 115 * vap / 5;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 1 && reversor === 2 && weight <= 18 && slope2 === 2) {
        calculo = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 + 278 * slope / 100 + 115 * vap / 5;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 2 && reversor === 2 && weight > 18 && slope2 === 2) {
        calculo = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 + 278 * slope / 100 + 115 * vap / 5;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 2 && reversor === 2 && weight <= 18 && slope2 === 2) {
        calculo = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 + 278 * slope / 100 + 115 * vap / 5;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 2 && reversor === 2 && weight > 18 && slope2 === 1) {
        calculo = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 - 28 * slope / 100 + 115 * vap / 5;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 2 && reversor === 2 && weight <= 18 && slope2 === 1) {
        calculo = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 - 28 * slope / 100 + 115 * vap / 5;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 2 && reversor === 1 && weight > 18 && slope2 === 2) {
        calculo = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 + 228 * slope / 100 + 115 * vap / 5 + 1426;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 2 && reversor === 1 && weight <= 18 && slope2 === 2) {
        calculo = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 + 228 * slope / 100 + 115 * vap / 5 + 1426;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 2 && reversor === 1 && weight > 18 && slope2 === 1) {
        calculo = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 - 28 * slope / 100 + 115 * vap / 5 + 1426;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }

      if (wind2 === 2 && reversor === 1 && weight <= 18 && slope2 === 1) {
        calculo = 1711 - 79 * qtdAbaixo / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 - 28 * slope / 100 + 115 * vap / 5 + 1426;
        console.log("Sera necessario: ", calculo, "mts para pousar");
      }
    } 
  } 
} 