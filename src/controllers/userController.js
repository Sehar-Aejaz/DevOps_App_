const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// Controller method to get users
exports.getUsers = (req, res) => {
  res.status(200).json(users);
};
