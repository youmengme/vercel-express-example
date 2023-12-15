const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.send(`Hello from Express on Vercel! Current Date: ${(new Date).toLocaleString()}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
