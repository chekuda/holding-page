const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const Routes = require('./server/routers/routes')

const app = express()

const port = process.env.PORT || 3000

const exphbsConfig = {
  defaultLayout: 'index',
  layoutsDir: __dirname + '/server/views'
}

app.engine('handlebars', exphbs(exphbsConfig))
app.set('views', exphbsConfig.layoutsDir)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/public', express.static(__dirname + '/server/public'))

app.use('/api', Routes)

app.get('/', (req, res) => {
  const dataPage = {
    quote: 'Welcome Jose',
    logic: '/public/js/home.js'
  }
  res.render('home', dataPage)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
