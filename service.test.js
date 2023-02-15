const {deepStrictEqual} = require('assert')
const {describe, it} = require('mocha')
const sinon = require('sinon')
const Service = require('./src/service')


const mocks = {
    characters:require('./mocks/characters.json'),
    samwell: require('./mocks/Samwell.json'),
    continents: require('./mocks/continents.json')
}

const BASE_URL = "https://thronesapi.com/api/v2/"

// The function bellow were used to populate the mocks for the stubs
// ;(async()=>{
    // {
        // const service = new Service()
        // const characters = await service.makeRequest(`${BASE_URL}Characters`)
        // const samwell = await service.makeRequest(`${BASE_URL}Characters/1`)
        // const continents  = await service.makeRequest(`${BASE_URL}Continents`)
        // console.log( JSON.stringify(continents) )
    // }
// })()

describe('Game of Thrones API Suite test', ()=>{
    
    const service = new Service()
    const stub = sinon.stub(service, service.makeRequest.name)

    stub
        .withArgs(`${BASE_URL}Characters`)
        .resolves(mocks.characters)
    
    stub
        .withArgs(`${BASE_URL}Characters/1`)
        .resolves(mocks.samwell)

    stub
        .withArgs(`${BASE_URL}Continents`)
        .resolves(mocks.continents)
        
    describe('/Characters/1', ()=>{
        it("Should return Samwell Data when requesting Characters/1", async()=>{
            // const service = new Service()
            const result = await service.getCharacters(`${BASE_URL}Characters/1`)
            deepStrictEqual(JSON.stringify(result), JSON.stringify(mocks.samwell))
        })
    })
    describe('/Characters', ()=>{
        it("Should return all the characters",async ()=>{
            // const service = new Service()
            const result = await service.getCharactersById(`${BASE_URL}Characters`)
            deepStrictEqual(result.length, 53)
        })
    })
    describe('/Continents', ()=>{
        it("Should return all the continents", async ()=>{
            // const service = new Service()
            const result = await service.getContinents(`${BASE_URL}Continents`);
            const expected = [
                { id: 0, name: 'Westeros' },
                { id: 1, name: 'Essos' },
                { id: 2, name: 'Sothoryos' },
                { id: 3, name: 'Ulthos' }
              ]
            deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
        })
    })
  
})