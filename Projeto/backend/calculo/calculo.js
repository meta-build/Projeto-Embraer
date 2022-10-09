const Params = require('./params');

let CalcularLD = (parametros) => {
    // futuramente: pegar diretamente da tabela os valores a partir dos parâmetros aeronave, flap, condição de pista e tipo de frenagem - retornar array com mesmo modelo do array USO

    // import getTabela from './extrair';
    // let base = getTabela(parametros.aircraftModel)

    // obs: selecionar SOMENTE flap 220 sem acresção de gelo
    // pode escolher qualquer condição

    const params = new Params();
    let base = [
        [/* flap 220 */
            [/* s/ gelo */
                [ /* condição 6 */
                    [ /* break config: manual */
                        [/* ref */ 1068],
                        [/* weight */[/* - */-46, /* + */47]],
                        [/* alt */ 29],
                        [/* temp */[/* - */-11, /* + */23]],
                        [/* wind */[/* - */-23, /* + */107]],
                        [/* slope */[/* - */-7, /* + */170]],
                        [/* vap */114],
                        [/* rev */129]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */[/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 5 */
                    [ /* break config: manual */
                        [/* ref */1239],
                        [/* weight */[/* - */-57, /* + */59]],
                        [/* alt */41],
                        [/* temp */ [/* - */-15, /* + */37]],
                        [/* wind */[/* - */-29, /* + */160]],
                        [/* slope */[/* - */-11, /* + */209]],
                        [/* vap */136],
                        [/* rev */515]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 4 */
                    [ /* break config: manual */
                                /* REF */[1357],
                            [/* weight */[-57, 59]],
                            /* alt */[41],
                            /* temp */[[-15, 35]],
                            [/* wind */[-31, 143]],
                            [/* slope */[-16, 214]],
                            [/* vap */120],
                            [/* rev */215]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 3 */
                    [ /* break config: manual */
                        [/* ref */ 1446],
                        [/* weight */[-63, 64]],
                        [/* alt */ 45],
                        [/* temp */ [-16, 40]],
                        [/* wind */[-34, 161]],
                        [/* slope */[-19, 238]],
                        [/* vap */126],
                        [/* rev */606]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 2 */
                    [ /* break config: manual */
                        [/* ref */1575],
                        [/* weight */[-76, 79]],
                        [/* alt */58],
                        [/* temp */ [-19, 59]],
                        [/* wind */[-39, 237]],
                        [/* slope */[-24, 317]],
                        [/* vap */143],
                        [/* rev */1039]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 1 */
                    [ /* break config: manual */
                        [/* ref */1721],
                        [/* weight */[-81, 83]],
                        [/* alt */ 61],
                        [/* temp */ [-19, 59]],
                        [/* wind */[-43, 228]],
                        [/* slope */[-32, 362]],
                        [/* vap */138],
                        [/* rev */1425]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
            ],
            [/* c/ gelo */
                [ /* condição 6 */
                    [ /* break config: manual */
                        [/* ref */1145],
                        [/* weight */[-49, 51]],
                        [/* alt */ 32],
                        [/* temp */ [-12, 26]],
                        [/* wind */[-23, 111]],
                        [/* slope */[-8, 179]],
                        [/* vap */ 103],
                        [/* rev */ 134]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 5 */
                    [ /* break config: manual */
                        [/* ref */ 1330],
                        [/* weight */[-62, 63]],
                        [/* alt */ 32],
                        [/* temp */ [-12, 26]],
                        [/* wind */[-30, 165]],
                        [/* slope */[-12, 219]],
                        [/* vap */115],
                        [/* rev */516]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 4 */
                    [ /* break config: manual */
                        [/* ref */1443],
                        [/* weight */[-62, 62]],
                        [/* alt */ 43],
                        [/* temp */ [-16, 38]],
                        [/* wind */[-32, 148]],
                        [/* slope */[-17, 222]],
                        [/* vap */105],
                        [/* rev */504]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 3 */
                    [ /* break config: manual */
                        [/* ref */1534],
                        [/* weight */[-67, 68]],
                        [/* alt */ 48],
                        [/* temp */ [-17, 43]],
                        [/* wind */[-34, 165]],
                        [/* slope */[-20, 248]],
                        [/* vap */106],
                        [/* rev */611]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 2 */
                    [ /* break config: manual */
                        [/* ref */1669],
                        [/* weight */[-80, 82]],
                        [/* alt */62],
                        [/* temp */ [-20, 63]],
                        [/* wind */[-40, 241]],
                        [/* slope */[-24, 327]],
                        [/* vap */ 117],
                        [/* rev */ 1065]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 1 */
                    [ /* break config: manual */
                        [/* ref */1813],
                        [/* weight */[-86, 87]],
                        [/* alt */ 64],
                        [/* temp */ [-20, 63]],
                        [/* wind */[-44, 233]],
                        [/* slope */[-32, 371]],
                        [/* vap */114],
                        [/* rev */1400]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
            ],
        ],
        [/* flap 450 */
            [/* c/ gelo */
                [ /* condição 6 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 5 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 4 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 3 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 2 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 1 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
            ],
            [/* s/ gelo */
                [ /* condição 6 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 5 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 4 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 3 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 2 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
                [ /* condição 1 */
                    [ /* break config: manual */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: high */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: med */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                    [ /* break config: low */
                        [/* ref */],
                        [/* weight */[/* - */, /* + */]],
                        [/* alt */],
                        [/* temp */ [/* - */, /* + */]],
                        [/* wind */[/* - */, /* + */]],
                        [/* slope */[/* - */, /* + */]],
                        [/* vap */],
                        [/* rev */]
                    ],
                ],
            ],
        ],
    ]

    let condicaoPista = parametros.airstripCondition
    let acrescaoGelo = parametros.iceBuildup
    let tabela = base[0][acrescaoGelo]
    let uso = tabela[tabela.length - condicaoPista][0]
    let referencia = uso[0][0]
    let refPeso = params.calcWeight(uso[1][0], [parametros.weight])
    let refAlt = params.calcAlt(uso[2], [parametros.airportAltitude])
    let refTemp = params.calcTemp(uso[3][0], [parametros.temp])
    let refVento = params.calcWind(uso[4][0], [parametros.windDirection, parametros.wind])
    let refSlope = params.calcSlope(uso[5][0], [parametros.slopeDirection, parametros.slope])
    let refVap = params.calcOverspeed(uso[6], [parametros.overspeed])
    let refRev = params.calcRevInop(uso[7], [parametros.reverser])

    console.log(refPeso)
    console.log(refAlt)
    console.log(refTemp)
    console.log(refVento)
    console.log(refSlope)
    console.log(refVap)
    console.log(refRev)

    let total = referencia + refPeso + refAlt + refTemp + refVento + refSlope + refVap + refRev
    console.log(total)
    return total;
}

module.exports = CalcularLD