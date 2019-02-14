const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb://belzy:12TestDb34@ds021915.mlab.com:21915/belzy-exercise-tracker';

mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '))

const userSchema = new Schema({
  _id: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  exercises: [{
    description: String,
    duration: Number,
    date: String,
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
