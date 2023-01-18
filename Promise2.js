// Promise using resolve and reject


const ourPromise = new Promise((resolve, reject) => {
    let number = null;
    if(number === 10) {
        resolve("Promise was fulfilled");
      } else {
        reject("Promise was rejected");
      }
    });
    console.log(ourPromise); 
    
    //output: Promise was rejected