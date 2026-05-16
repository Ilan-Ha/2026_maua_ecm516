const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {}

// mapa de funções (objeto js)
const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.constador] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || [] // se não tiver a chave observações, vira uma lista vazia []
        observacoes.push(observacao)
        // se a lista é nova
        // para onde o ponteiro aponta
        baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
    }
}

app.get('/lembretes', (req, res) =>{
    res.status(200).json(baseConsulta)
})

app.post('/eventos', (req, res) =>{
    // principio aberto fechado (apa de funções)
    try {
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados)
    } catch (error) {}
    res.end()
})


const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}`))

