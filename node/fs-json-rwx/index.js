const fs = require("fs");
const filePath = "./data.json";
const filData = fs.readFileSync(filePath, "utf-8");
const users = JSON.parse(filData);

const newUser = {
  id: users.length + 1,
  name: "Rahul",
  tech: "Java",
};

users.push(newUser);

const updateData = JSON.stringify(users, null, 2);

fs.writeFileSync(filePath, updateData);
console.log("Added Successfully");
