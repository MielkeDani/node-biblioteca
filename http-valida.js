const fetch = require('node-fetch')

function handlerError(erro) {
    throw new Error(erro.mensage)
}

async function checkStatus(arrayURLs) {
    try {
        const arraysStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url)
                    return res.status
                }))
        return arraysStatus
    } catch(erro) { 
        handlerError(erro)
    }
    
}

function generateArrayURL(arrayLinks) {
    return arrayLinks
        .map(objectLink => Object.
            values(objectLink).join())
}

async function validateURLs(arrayLinks) {
    const links = generateArrayURL(arrayLinks);
    const statusLinks = await checkStatus(links)
    const results = arrayLinks.map((object, index) => ({
        ...object,
        status: statusLinks[index]
    }))
    return results
}

module.exports = validateURLs