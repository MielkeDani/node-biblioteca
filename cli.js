const chalk = require('chalk')
const getFile = require('./index')
const validateURLs = require('./http-valida')
const path = process.argv;

async function processText(pathFile) {
    const result = await getFile(pathFile[2])
    if (path[3] === 'validar') {
        console.log(chalk.yellow('Array of Validated'), await validateURLs(result) )    
    } else {
        console.log(chalk.yellow('Array of Links'), result)
    }
}

processText(path)