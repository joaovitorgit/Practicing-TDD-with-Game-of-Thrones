const {deepStrictEqual} = require('assert')
const {describe, it} = require('mocha')
const Service = require('./src/service')
const EXPECTED_GET_CHARACTER_BY_ID = require('./mocks/Samwell.json')


const BASE_URL = "https://thronesapi.com/api/v2/"


describe('Game of Thrones API Suite test', ()=>{
    describe('/Characters/1', ()=>{
        it("Should return Samwell Data when requesting Characters/1", async()=>{
            const service = new Service()
            const result = await service.getCharacters(`${BASE_URL}Characters/1`)
            deepStrictEqual(JSON.stringify(result), JSON.stringify(EXPECTED_GET_CHARACTER_BY_ID))
        })
    })
})