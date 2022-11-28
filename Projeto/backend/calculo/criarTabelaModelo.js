const CriarTabelaModelo = (lista, arquivo) => {   
    const xlsx = require('xlsx');

    console.log('criando...')

    const arquivoModelo = arquivo;
    const sheetModelo = arquivoModelo.Sheets['model'];

    const novoArquivo = xlsx.utils.book_new();

    lista.forEach(item => {
        xlsx.utils.book_append_sheet(novoArquivo, sheetModelo, item)
    });

    xlsx.writeFile(novoArquivo, './files/model-created.xls');

    console.log('criado')
}

module.exports = CriarTabelaModelo