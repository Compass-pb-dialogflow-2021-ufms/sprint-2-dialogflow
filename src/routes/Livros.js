const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({ msg: "Rota GET para livros." })
})

router.post('/', (req, res) => {
    res.send({ msg: "Rota POST para livros." })
})

router.put('/', (req, res) => {
    res.send({ msg: "Rota PUT para livros." })
})

router.delete('/', (req, res) => {
    res.send({ msg: "Rota DELETE para livros." })
})

module.exports = router