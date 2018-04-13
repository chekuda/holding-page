const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const validator = require('express-validator')

const Routes = require('./routes/routes')
const shared = require('./shared')

const app = express()

const port = process.env.PORT || 3000

const exphbsConfig = {
  defaultLayout: 'index',
  layoutsDir: __dirname + '/views'
}

app.engine('handlebars', exphbs(exphbsConfig))
app.set('views', exphbsConfig.layoutsDir)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(validator())

app.use('/public', express.static(__dirname + '/public'))

app.use('/form', Routes)

app.get('/', (req, res) => {
  res.render('form', shared)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})