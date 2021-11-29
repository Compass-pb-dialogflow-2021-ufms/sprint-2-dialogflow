const Jogo = require('../modelos/jogo')

const buscarJogos = async (req, res) => {
    try{
        const jogo = await Jogo.find()
        res.json(jogo)
    } catch(err){
        res.status(500).json({message: 'Erro interno do servidor'})
    }
}

const inserirJogo = async (req, res) => {
    const jogo = new Jogo({
        nome: req.body.nome,
        nota: req.body.nota,
        genero: req.body.genero
    })
    try{
        const novoJogo = await jogo.save()
        res.status(201).json(novoJogo)
    }catch(err){
        res.status(400).json({ message: 'Não foi possível adicionar um jogo' })
    }
}

const atualizarJogo = async (req, res) => {
    if (req.body.nome != null) {
        res.jogo.nome = req.body.nome
      }
      if (req.body.nota != null) {
        res.jogo.nota = req.body.nota
      }
      if (req.body.genero != null) {
          res.jogo.genero = req.body.genero
      }
      try {
        const updateDoJogo = await res.jogo.save()
        res.json(updateDoJogo)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
}

const deletarJogo = async (req, res) => {
    try{
        await res.jogo.remove()
        res.json({message: 'Jogo deletado'})
    }catch (err){
        res.status(500).json({message: 'Erro interno do servidor'})
    }
}

const buscarJogoEspecifico = async (req, res) => {
    res.send(res.jogo)
}

//Middleware que pega o jogo e pula para o próximo
async function getJogo(req, res, next){
    let jogo
    try{
        jogo = await Jogo.findById(req.params.id)
        if(jogo == null){
            return res.status(404).json({ message: 'Jogo não encontrado'})
        }
    } catch(err){
        return res.status(500).json({ message: 'Erro interno do servidor'})
    }

    res.jogo = jogo
    next()
}

module.exports = {
    buscarJogos
  , inserirJogo
  , atualizarJogo
  , deletarJogo
  , buscarJogoEspecifico
  , getJogo
}