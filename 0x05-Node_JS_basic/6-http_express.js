const express = require('express')

const PORT = 12345;
const app = express();

app.get('/', (__, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

module.export = app;
