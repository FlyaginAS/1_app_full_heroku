const util = require('util');
const fs = require('fs');

const readPro = util.promisify(fs.readFile);
const writePro = util.promisify(fs.writeFile);

exports.getAllUsers = async (req, res) => {
  const users = JSON.parse(
    await readPro(`${__dirname}/../data/users.json`, 'utf-8')
  );

  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
};
exports.createUser = async (req, res) => {
  const users = JSON.parse(
    await readPro(`${__dirname}/../data/users.json`, 'utf-8')
  );

  const user = req.body;
  users.push(user);
  writePro('./users.json', JSON.stringify(users), 'utf-8');
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
};
