const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

//definir um endpoint POST /eventos
//extrair o evento da requisição
//enviar o evento para ambos os mss de lembretes e observações
//usando a axios
const url = 'http://host.docker.internal'
app.post('/eventos', async function(req, res){
  const evento = req.body
  console.log(evento)
  try{
    await axios.post(url+':4000/eventos', evento)
  }
  catch(e){}
  try{
    await axios.post(url+':5001/eventos', evento)
  }
  catch(e){}
  try {
    await axios.post(url+':6000/eventos', evento)
  }
  catch(e){}
  try {
    await axios.post(url+':7001/eventos', evento)
  } 
  catch (e){}
  res.end() 
})

//colocar o barramento de eventos em funcionamento na porta 10000
const port = 10000
app.listen(port, () => {console.log(`Barramento. Porta ${port}.`)})