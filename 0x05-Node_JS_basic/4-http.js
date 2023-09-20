const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer((req, res) => {
  // Set the response headers
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

module.exports = app;