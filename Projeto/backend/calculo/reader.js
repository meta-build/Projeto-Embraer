//var prompt = require('prompt');
//prompt.start();

let CalcularLD = (parametros) => {
    var XLSX = require('xlsx')
    //var readline = require('readline-sync');
    var aircraftModel = parametros.aeronavesId;
    console.log(aircraftModel);
    var workbook = XLSX.readFile('./files/'+aircraftModel+'.xls');
    var sheet_name_list = workbook.SheetNames;
    var xlData1 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]); // flap 220 without ice
    var xlData2 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]); // flap 220 with ice
    var xlData3 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]); // flap 450 without ice
    var xlData4 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[3]]); // flap 450 with ice
    var flap = parametros.landingFlap*1;
    var ice = parametros.iceBuildup*1;
    var rwycc = parametros.airstripCondition;
 
    var flap_value = ""
    switch (flap) {
        case 0:
            switch (ice) {
                case 1:
                    flap_value = xlData2;
                    break;
                case 0:
                    flap_value = xlData1;
                    break;
            }
            break;
        case 1:
            switch (ice) {
                case 1:
                    flap_value = xlData4;
                    break;
                case 0:
                    flap_value = xlData3;
                    break;
            }
            break;
        }
 
    var weight = parametros.weight*1;
    var alt = parametros.airportAltitude*1;
    var ISA = (15+((alt/1000)*-2))*1;
    var temp = parametros.temp*1;
    var wind = parametros.wind*1;
    var wind_direction = parametros.windDirection*1;
    var slope = parametros.slope*1;
    var slope_type = parametros.slopeDirection*1;
    var vel = parametros.overspeed*1;
    var ver = parametros.reverser*1;

    function line_ref() {
        for (i=0; flap_value[i]['__EMPTY'] != rwycc; i++) {
        }
        return i;

    } 

    var d_Ref = flap_value[line_ref(rwycc)]['REF'];
    var vRef = flap_value[0]['vRef'];
    var wRef = flap_value[0]['wRef'];
    var overWeight = flap_value[0]['overWeight'];
    var overWadd = flap_value[0]['overWadd'];
    var n_Vap = parseFloat(((wind/3+vel)-vRef)/5); //índice de multiplicação VAP

    var d_Weight = ""
        if (weight < wRef) {
            d_Weight = parseFloat((((wRef-weight)/1000)*flap_value[line_ref(rwycc)]['WEIGHT']).toFixed(2));
        }
        else if (weight == wRef) {
            d_Weight = 0;
        }
        else if (weight > wRef && weight < overWeight) {
            d_Weight = parseFloat((((weight-wRef)/1000)*flap_value[line_ref(rwycc)]['__EMPTY_1']).toFixed(2));
        }
        else {
            d_Weight = parseFloat((((weight-wRef)/1000)*flap_value[0]['overWadd']).toFixed(2));
        }

    var d_Alt = ""
        if (wind <= 0) {
            d_Alt = 0;
        }
        else {
            d_Alt = parseFloat(((alt/1000)*flap_value[line_ref(rwycc)]['ALT']).toFixed(2));
        }

    var d_Temp = ""
        if (temp < ISA) {
            d_Temp = parseFloat((((ISA-temp)/5)*flap_value[line_ref(rwycc)]['TEMP']).toFixed(2));
        }
        else if (temp == ISA) {
            d_Temp = 0;
        }
        else {
            d_Temp = parseFloat((((temp-ISA)/5)*flap_value[line_ref(rwycc)]['__EMPTY_2']).toFixed(2));
        }

    var d_Wind = ""
        if (wind == 0) {
            d_Wind = 0;
        }
        else {
            switch (wind_direction) {
                case 0:
                    d_Wind = parseFloat((((wind)/5)*flap_value[line_ref(rwycc)]['WIND']).toFixed(2));
                    break;
                case 1:
                    d_Wind = parseFloat((((wind)/5)*flap_value[line_ref(rwycc)]['__EMPTY_3']).toFixed(2));
                    break;
            }
        }

    var d_Slope = ""
        if (slope == 0) {
            d_Slope = 0;
        }
        else {
            switch (slope_type) {
                case 0:
                    d_Slope = parseFloat((slope*flap_value[line_ref(rwycc)]['SLOPE']).toFixed(2));
                    break;
                case 1:
                    d_Slope = parseFloat((slope*flap_value[line_ref(rwycc)]['__EMPTY_4']).toFixed(2));
                    break;
            }
        }

    var d_Vap = ""
        if (wind == 0 || wind_direction == 0) {
            d_Vap = 0;
        }
        else {
            d_Vap = parseFloat((n_Vap*flap_value[line_ref(rwycc)]['VAP']).toFixed(2));
        }

    var d_Ver = ""
    switch (ver) {
        case 0:
            d_Ver = 0;
            break;
        case 1:
            d_Ver = parseFloat(slope*flap_value[line_ref(rwycc)]['VER']);
            break;
    }

    console.log(wRef)
    console.log(overWeight)
    console.log(overWadd)
    console.log(weight)
    console.log(d_Ref)
    console.log(d_Weight)
    console.log(d_Alt)
    console.log(ISA)
    console.log(d_Temp)
    console.log(d_Wind)
    console.log(d_Slope)
    console.log(n_Vap)
    console.log(d_Vap)
    console.log(d_Ver)

    //CÁLCULO DE COMPRIMENTO POUSO
    let runway_leng = parseFloat(d_Ref + d_Weight + d_Alt + d_Temp + d_Wind + d_Slope + d_Vap + d_Ver);

    console.log(runway_leng.toFixed(2))
    return runway_leng.toFixed(2);
    //const line = XLSX.utils.sheet_to_json(flap_value, { header: '__EMPTY' });
    //console.log(line)
    //const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1 });
}
module.exports = CalcularLD