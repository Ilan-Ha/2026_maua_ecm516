const express = require('express')
const app = express()

// função middleware
app.use(express.json()) // se a requisição tiver um corpo, vai ser tratada como objeto javascript

// base volatil
const lembretes = {

}
/*
{
    1: {
        id: 1
        texto: 'Fazer café'
    },
    2: {
        id: 2,
        texto: 'Natação'
    }
}
*/

// contador do id
let id = 0

const port = 4000

const endpoints = {
    lembretes : '/lembretes'
}
// 1° endopoint http
app.get(endpoints.lembretes, (req, res) => {
    // devolve objeto lembretes
    res.json(lembretes)
})

// 2° endopoint http
app.post(endpoints.lembretes, (req, res) => {
    // incrementar o id
    // extrair a propriedade texto do corpo da req
    // cadastrar na base, tal qual mostra o exemplo
    // responder trocando o status para 201 e, no corpo, incluir o lembrete criado
    id++
    const {texto} = req.body
    const lembrete = {texto: texto, id: id}
    lembretes[id] = lembrete
    res.status(201).json(lembrete)
})

app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}.`)
})