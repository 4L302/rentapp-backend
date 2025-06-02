require('dotenv').config();
const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/upload');

const app = express();

// ✅ CORS per Netlify + localhost
const allowedOrigins = [
  'http://localhost:3000',
  'https://ga-rentapp.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use('/api/upload', uploadRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server avviato sulla porta ${PORT}`);
});
