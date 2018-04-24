/*
Node.js example/cheatsheet by Michael Zeevi.
Twitter: @maze_52
Github: @maze88
Homepage: https://www.maze88.xyz

This cheatsheet consists of functional Node.js expressions that demonstrate basic usage.
Some expressions are embedded with examples of other types of expressions in them, giving the cheatsheet characteristics of a demo more than of a documentation.
It is intended for entry level users, for example learning Node.js as their first or second programming language.
All code here is executable except for code requiring external modules (see '/* Packages *\/', below).
*/

/* Printing */
  // Print to console:
  console.log('Running Node.js example/cheat-sheet demo.\n');

/* Variables */
  // Number, boolean, array.
  var y = 1988;
  var spicy = false;
  var usernames = ['maze', 'work', 'test'];

/* Loops */
  // Standard for-loop & powers:
  for(n = 0; n <= 8; n++) {
    var x = Math.pow(2, n);
    console.log(x);
  }

  // Simplified for-loop:
  for(i in usernames) {
    console.log(usernames[i]); // square brackets access in index within an object.
  }

  // While loop:
  while (y >= 0) {
    console.log(y);
    y = y - 120;
  }

/* Logic */
  // Conditional statement:
  if(0 < -1 || false || 1) {
    console.log(Math.random()); // random returns a float from the range [0,1).
  } else {
    console.log('Condition evaluated as false...');
  }

/* Numbers */
  // Random integer 1-6:
  console.log(1 + Math.floor(Math.random() * 6));

  // Pi:
  console.log(Math.PI);

/* Functions */
  // Define a function:
  function fizz(number) {
    if(!(number % 3)) { // % is the modulous operator.
      return 'fizz!'
    } else {
      return number.toString() // toString() changes variable's type to string.
    }
  }

  // Call a function:
  console.log(fizz(10));
  console.log(fizz(15));

/* Process */
  // Exit the running script:
  console.log('\nNode.js cheatsheet demo has finished running early because dependancies (packages) may not be installed.\nFor more info: See /* Packages */ in source code file', __filename);
  process.exit();

/* Packages */
  // In order to use external packages, first they must be installed using the Node Package Manager (`sudo apt install npm`).
  // Package installation via CLI: `npm install --save packageName` where 'packageName' is a package to install such as 'twit' or 'sleep'.

  // Sleep for 3 seconds (in three different ways):
  var sleep = require('sleep');
  sleep.sleep(3);
  sleep.msleep(3000);
  sleep.usleep(3000000);


