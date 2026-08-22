const express = require('express')
const axios = require('axios')

const app = express()

// função middleware
app.use(express.json()) // se a requisição tiver um corpo, vai ser tratada como objeto javascript

// base volatil
const lembretes = {}
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
let contador = 0

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
app.post(endpoints.lembretes, async (req, res) => {
    // incrementar o id
    // extrair a propriedade texto do corpo da req
    // cadastrar na base, tal qual mostra o exemplo
    // responder trocando o status para 201 e, no corpo, incluir o lembrete criado
    contador++
    const {texto} = req.body
    lembretes[contador] = {contador, texto}

    await axios.post('http://host.docker.internal:10000/eventos', {
        tipo: 'Lembrete.Criado',
        dados: {contador, texto}
    })
    
    res.status(200).send(lembretes[contador])
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end()
})

app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}.`)
})