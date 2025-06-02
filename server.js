require('dotenv').config();
const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/upload');

const app = express();

// ✅ CORS configurato per Netlify e localhost
const allowedOrigins = [
  'http://localhost:3000',
  'https://ga-rentapp.netlify.app'
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// ✅ Rotta per upload immagini
app.use('/upload', uploadRoute);

// ✅ Porta gestita da Render o fallback a 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server avviato sulla porta ${PORT}`);
});
