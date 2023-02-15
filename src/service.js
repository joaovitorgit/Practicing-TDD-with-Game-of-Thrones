const https = require('https')

class Service{
    async makeRequest(url){
        return new Promise((resolve, reject)=>{
            https.get(url, response=>{
                response.on("data", data=>resolve(JSON.parse(data)))
                response.on("error", reject)
            })
        })
    }

    async getCharacters(url){
        const result = await this.makeRequest(url)
        return result
    }

    async getCharactersById(url){
        const result = await this.makeRequest(url)
        return result;
    }

    async getContinents(url){
        const result = await this.makeRequest(url)
        return result;
    }


}

module.exports = Service
