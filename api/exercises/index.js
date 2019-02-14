const shortid = require('shortid');
const express = require('express');
const router = express.Router();
const helpers = require('../../data/helpers/index.js');

// Get users.
router.get('/api/exercises/users', (req, res, next) => {

  helpers.getUsers((error, doc) => {
    error ? res.status(500).json({ error }) : res.status(201).json(doc);
  });
});

// Add a new user
router.post('/api/exercises/new-user', (req, res, next) => {

  const _id = shortid.generate();
  const { username } = req.body;

  helpers.addUser({ _id, username }, (error, users) => {
    error ? res.status(500).json({ error }) : res.status(201).json(users);
  });
});

// Add a new exercise

module.exports = router;
