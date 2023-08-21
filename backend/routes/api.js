const express = require('express');
const router = express.Router();

// Example API endpoint
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the API route!' });
});

module.exports = router;
