const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'c9c-client', 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'c9c-client', 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});