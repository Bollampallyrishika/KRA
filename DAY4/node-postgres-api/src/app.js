const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  res.send('TEST OK');
});

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
