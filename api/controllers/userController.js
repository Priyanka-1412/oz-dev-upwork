const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.allUsers = (req, res) => {
  User.find({}, (err, users) => {
    if(err) res.send(err);
    res.json(users);
  });
};

exports.creatAUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if(err) res.send(err);
    res.send(user)
  });
};

exports.readAUser = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if(err) res.send(err);
    res.send(user);
  });
};

exports.updateAUser = (req, res) => {
  User.findOneAndUpdate(
    {
      _id: req.params.userId
    },
    req.body,
    { new: true },
    (err, user) => {
      if (err) res.send(err);
      res.json(user);
    }
  )
};

exports.deleteAUser = (req, res) => {
  User.deleteOne({_id: req.params.userId}, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'User deleted successfully',
      _id: req.params.userId
    });
  })
}
