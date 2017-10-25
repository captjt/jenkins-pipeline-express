const http = require('http')

http.createServer( (req, res) => {
  handler(req, res,  (err) => {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(process.env.NODE_PORT, (err) => {
  if (err) return err
  console.log(`Listening at port ${process.env.NODE_PORT}`)
  console.log('Press Ctrl-C to exit')
})