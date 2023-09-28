import express from 'express'
const app = express()

const port = 3000

app.get('/cadastro', (req, res) => {
  const nome = req.query.nome
  const email = req.query.email
  const telefone = req.query.telefone

  const partida = req.query.partida
  const chegada = req.query.chegada
  const origem = req.query.origem
  const destino = req.query.destino
const infantil = req.query.infantil
const preferencias = req.query.preferencias



  res.send(`
  <html>
    <head>
      <title>Confirmação de Cadastro</title>
    </head>
    <body>
      <h1>Cadastro Confirmado com Sucesso!</h1>
      <p>Nome: ${nome}</p>
      <p>Email: ${email}</p>
      <p>Telefone: ${telefone}</p>
      <p>Partida: ${partida}</p>
      <p>Chegada: ${chegada}</p>
      <p>origem: ${origem} destino: ${destino} </p>
      <p>infantil: ${infantil}</p
      <p>Preferencias: ${preferencias}</p>
    </body>
  </html>
  `)
})


app.listen(port, () => {
  console.log('Servidor Iniciado')
})
