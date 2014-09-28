express = require 'express'
app = express()


app.use express.bodyParser()
app.use express.static __dirname + '/../client'
app.use 'views', __dirname + '/../views'

app.set 'view engine', 'jade'
app.set 'view options',
  layout: false

app.get '/', (req, res) ->

  res.render 'index'

app.get '/match', (req, res) ->

  res.render 'partials/match'

app.get '/menu', (req, res) ->

  res.render 'partials/menu'

app.get '/team', (req, res) ->

  res.render 'partials/team'

app.listen 3005, ->
  console.log 'My App is listening on por 3005'


