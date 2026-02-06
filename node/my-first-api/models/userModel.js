const users = [
  { id: 1, name: "Basauraj", email: "bp@dam@gmail.com" },
  { id: 2, name: "Chetan", email: "cm@dam@gmail.com" },
];

const getAllUsers = () => {
  return users;
};
console.log('User Model')

const getUsersById = (id) => {
  return users.find((user) => user.id === parseInt(id));
};

module.exports = {
  getAllUsers,
  getUsersById,
};
