const express = require('express')
const app = express()

app.set('secret', 'abcabc')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'));

require('./plugin/db')(app)
require('./router/blogLabel')(app)
require('./router/blog')(app)
require('./router/comment')(app)
require('./router/user')(app)

app.use(async (err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    message: err.message
  })
})

app.listen(3000, () => {
  console.log("3000");
})