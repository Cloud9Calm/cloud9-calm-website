require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from the 'c9c-client/public' directory
app.use(express.static(path.join(__dirname, 'c9c-client', 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'c9c-client', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});