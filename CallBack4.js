// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);

//OUTPUT
//Hello world
//Hello John