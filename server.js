require('dotenv').config();
const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/upload');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/upload', uploadRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
