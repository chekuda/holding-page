require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const validator = require('express-validator')

const dbconnection = require('./dbconnection/config')
const Routes = require('./routes/routes')
const shared = require('./shared')

const app = express()

const dbUrl = process.env.ENV !== 'prod'
  ? process.env.LOCAL_DB_URL
  : process.env.REMOTE_DB_URL

dbconnection.createDBConnection(dbUrl)

const port = process.env.PORT || 3000

const exphbsConfig = {
  defaultLayout: 'index',
  layoutsDir: path.resolve(__dirname + '/views')
}
console.log(exphbsConfig.layoutsDir)

app.engine('handlebars', exphbs(exphbsConfig))
app.set('views', exphbsConfig.layoutsDir)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(validator())

app.use('/public', express.static(path.resolve(__dirname + '/public')))

app.use('/form', Routes)

app.get('/', (req, res) => {
  res.render('form', shared)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
