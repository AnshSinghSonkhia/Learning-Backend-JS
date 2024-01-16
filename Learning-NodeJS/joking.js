var oneLinerJoke = require('one-liner-joke');

console.log(oneLinerJoke.getRandomJoke());

var figlet = require("figlet");

figlet("ansh singh sonkhia", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
