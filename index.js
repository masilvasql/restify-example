const restify = require('restify')
const server = restify.createServer()


server.get('/', (req, res) => {
    res.send({ mensagem: 'Restify' })
})

server.get('/mensagem/:nome', (req, res) => {
    res.send({ mensagem: `nome: ${req.params.nome}` })
})

function temNome(req, res, next) {
    console.log("parr ", req.params)
    if (req.params.parametro) {
         next(); 
    }else{
        res.send('Inválido')
    } 
}

function resposta(req, res, next) {
    res.send({ mensagem: `rota com parâmetro: ${req.params.parametro}` })
    next()
}

server.get('/parametro/:parametro', temNome, resposta)

server.listen(3002, () => {
    console.log("rodando")
})