const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const palavraChave = 'importante'

const funcoes = {
    ['Observacao.Criada']: (observacao) => {
        observacao.status = 
            observacao.texto.includes(palavraChave)
            ? "importante"
            : "normal"
        axios.post('http://host.docker.internal:10000/eventos',{
            tipo: 'Observacao.Classificada',
            dados: observacao
        })
    }
}
app.post('/eventos', (req,res) => {
    try {
        funcoes[req.body.tipo](reqbody.dados)
    } catch (e) {}
    res.status(200).send({msg: 'ok'})
})

app.listen(7001, () =>{
    console.log("Classificação, Porta 7001")
})