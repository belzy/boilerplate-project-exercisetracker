const express = require('express');
const router = express.Router();

// Add a new user
router.use('/api/exercise/test', (req, res, next) => {
  res.send('test');
});

// Add a new exercise

module.exports = router;
