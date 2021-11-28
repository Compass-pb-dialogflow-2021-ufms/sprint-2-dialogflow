const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({ msg: "Rota GET para filmes." })
})

router.post('/', (req, res) => {
    res.send({ msg: "Rota POST para filmes." })
})

router.put('/', (req, res) => {
    res.send({ msg: "Rota PUT para filmes." })
})

router.delete('/', (req, res) => {
    res.send({ msg: "Rota DELETE para filmes." })
})

module.exports = router