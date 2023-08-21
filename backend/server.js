const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
