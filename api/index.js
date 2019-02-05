const exerciseRouter = require('./exercise/index.js');
const express = require('express');
const router = express.Router();

router.use(exerciseRouter);

module.exports = router;
