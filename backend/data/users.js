const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "sun",
    email: "sun@sun.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "moon",
    email: "moon@moon.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
