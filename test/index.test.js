const getFile = require('../index'); 

const arrayResults = [ 
    { 
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('getFile::', ()=> { 
    it('Is a function', ()=> { 
        expect(typeof getFile).toBe('function')
    })
    it ('Should return array with results',  async() => {
        const result = await getFile('/home/dani/Documentos/programming/backend/node-biblioteca/test/files/texto1.md')
        expect(result).toEqual(arrayResults)
    })
    it('Should return "not has a likes"', async () => { 
        const result = await getFile('/home/dani/Documentos/programming/backend/node-biblioteca/test/files/texto1_linkoff.md')
        expect(result).toBe("Não há links")
    })
})
