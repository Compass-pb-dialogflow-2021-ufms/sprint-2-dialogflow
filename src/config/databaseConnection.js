require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_HOST, { useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose