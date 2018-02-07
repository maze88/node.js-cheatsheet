/*
Node.js example/cheatsheet by Michael Zeevi.
Twitter: @maze_52
Githueb: @maze88

This cheatsheet consists of functional Node.js expressions that demonstrate basic usage.
It is intended for entry level users, for example learning Node.js as their second programming language.
All code here is executable except for code requiring external modules (see '// Modules', below).
*/

/* Variables */
  // Number, boolean, array.
  var y = 1988;
  var spicy = false;
  var usernames = ['maze', 'work', 'test'];

/* Printing */
  // Print to console:
  console.log(usernames, y);

/* Logic */
  // Simplified for-loop:
  for(name in usernames) {
    console.log(name);
  }

  // Standard for-loop & powers:
  for(n = 0; n <= 8; n++) {
    var x = Math.pow(2, n);
    console.log(x);
  }

  // Conditional statement:
  if(0 < -1 || false || 1) {
    console.log(Math.random());
  } else {
    console.log('false');
  }

/* Numbers */
  // Random integer 1-6:
  console.log(1 + Math.floor(Math.random() * 6));

/* Functions */
  // Define a function:
  function fizz(number) {
    if(!(number % 3)) {
      return 'fizz!'
    } else {
      return number
    }
  }

  // Call a function:
  console.log(fizz(10));
  console.log(fizz(15));


/* Modules */
  throw new Error('Node.js cheatsheet demo has finished running early because dependancies (modules) may not be installed. See /* Modules */ in source for more info.');
  // In order to use external modules, first they must be installed using the Node Package Manager (`sudo apt install npm`).
  // Module installation via CLI: `npm install --save moduleName` where 'moduleName' is a module name such as 'twit' or 'sleep'.

  // Sleep for 3 seconds (in three different ways):
  var sleep = require('sleep');
  sleep.sleep(3);
  sleep.msleep(3000);
  sleep.usleep(3000000);


