const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rotte
const uploadRoute = require('./routes/upload');
app.use('/upload', uploadRoute);

app.listen(PORT, () => {
  console.log(`✅ Server attivo sulla porta ${PORT}`);
});
