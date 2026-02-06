const userModel = require("../models/userModel.js");

const getUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.json(users);
};
console.log('User constroller')
console.log(userModel.getAllUsers)
const getUser = (req, res) => {
  const user = userModel.getUsersById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getUsers,
  getUser,
};
