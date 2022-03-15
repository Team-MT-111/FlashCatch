const express = require('express');
const app = express();
const path = require('path');

const apiRouter = require('./routes/apiRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(3000, () => {
  console.log('server is listening to PORT 3000');
})