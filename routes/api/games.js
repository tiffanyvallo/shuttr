app.get('/about', function (req, res) {
  res.send('about')
})

app.get('/signup', function (req, res) {
  res.send('signup')
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})