// Zero Delays

(() => {
    console.log('This is the Start');

    setTimeout(() => {
        console.log('Callback 1: This is a message from Callback');
    });  // has a default time value of 0

    console.log('This is just a Message');

    setTimeout(() => {
        console.log('Callback 2:This is a message from Callback');
    },0);

    console.log('This is the End');
    }) ();

    // Output

    //This is the Start
    //This is just a Message
    //This is the End
    //Callback 1: This is a message from Callback
    //Callback 2:This is a message from Callback