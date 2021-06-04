const userBuilder = require('../controllers/userController');

module.exports = (app) => {
  app.route('/users')
    .get(userBuilder.allUsers)
    .post(userBuilder.creatAUser);

  app.route('/users/:userId')
    .get(userBuilder.readAUser)
    .put(userBuilder.updateAUser)
    .delete(userBuilder.deleteAUser)
};
