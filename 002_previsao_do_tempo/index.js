const axios = require('axios')
const appid = 'a7fd8774717563f368002a76ec010bf3'
const appidTemp = 'ef0b0973b783e0614ac87612ec04344b'
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
const q = 'Itu'
const cnt = 1
const units = 'metric'
const lang = 'pt_br'
const url = `${baseURL}?q=${q}&appid=${appidTemp}&cnt=${cnt}&units=${units}&lang=${lang}`
axios.get(url)  /// requisição assincrona por padrão (não bloqueante) metodo get é uma promise
.then(res => {
    console.log(res['data'])
    return res.data
    })
.then(res => {
    console.log(res.list)
    return res.list
})
.then(res => {
    /// mostrando temperatura maxima
    console.log(res[0].main.temp_max)
    return res
})
.then(previsoes => {
    /// iterar sobre a lista aqui
    for(let previsao of previsoes){
        console.log(previsao.weather[0].description)
    }
})
/// axios retorna a parte tecnica e o corpo da resposta fica em [data]
console.log('A')