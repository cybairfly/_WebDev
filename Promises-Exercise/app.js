const fs = require('fs');
const util = require('util');
const axios = require('axios');

//unused for reference only
/*
function toString(object) {
  return util.inspect(object);
  //return JSON.stringify(users)
  //TypeError: Converting circular structure to JSON
}

function getUsersAsync() {
  let users = [];
  for (let username of arguments) {
    let url = `https://api.github.com/users/${username}`;
    users.push(axios.get(url));//insert axios promises
  }
  return users;
}
*/
let users = [
  "cybairfly",
  "openshift",
  "Nickersoft"
];

//function replaced with the axios map below
//let allPromises = getUsersAsync(...users);
let urls = users.map(user => axios.get(`https://api.github.com/users/${user}`));

Promise.all(urls)
.then((users) => {
  for (let user of users) {
    console.log(`${user.data.login} followed by ${user.data.followers}`);
  }
  users.sort((one, two) => one.data.followers < two.data.followers);
  console.log(`${users[0].data.login} has most followers`);
})
.catch((e) => console.log(e));
