const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

// Simple health‑check endpoint
app.get('/', (req, res) => res.send('ReadSphere API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serrver listening on ${PORT}`));
