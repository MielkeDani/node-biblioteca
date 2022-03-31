const chalk = require('chalk');
const fs = require('fs');


function extractLink ( text ) { 
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResults = [] ; 
    let temp //Temporary
    while((temp = regex.exec(text)) !== null ) { 
        arrayResults.push({ [temp[1]]: temp[2] })
    } 
    return arrayResults.length === 0 ? 'Não há links' : arrayResults
}

    function handleError(erro) {
        throw new Error(chalk.red(erro.code, '-> Error!! Check the code  in the Documentation '));
    }

    async function getFile(pathFile) {
        const enconding = 'utf-8';
        try {
            const text = await fs.promises.readFile(pathFile, enconding)
            return extractLink(text)
        } catch (erro) {
            handleError(erro)
        }
    }


// function getFile(pathFile) { 
//     const enconding = 'utf-8'
//     fs.promises
//     .readFile(pathFile, enconding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((erro) => handleError(erro))
// // }

// function pegaArquivo(caminhoDoArquivo) {
//     const enconding = 'utf-8'
//     fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro)
//         }
//         console.log(chalk.green(texto));
//     })
// }

// /*Teste para erro*/ getFile('./arquivos/')



//getFile('./arquivos/texto1.md');

module.exports = getFile