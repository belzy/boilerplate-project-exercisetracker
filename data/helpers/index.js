const models = require('../models/index.js');


module.exports = {
  getUsers: function(done) {
    models.User.find({}, done);
  },
  addUser: function(data, done) {
    models.User.create(data, (err, user) => {
      if (err) {
        done(err);
      } else {
        models.User.find({}, done);
      }
    });
  }
};
