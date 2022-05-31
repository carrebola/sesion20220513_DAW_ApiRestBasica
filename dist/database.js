//mongodb+srv://carlos_soc_fpllefia:<password>@cluster0.w1e6t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose')

const DB_USER = 'carlos_soc_fpllefia'
const DB_NAME = 'bd_daw_productos' 
const DB_PASS = 'fpllefia_soc_carlos'

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.w1e6t.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

module.exports = db
