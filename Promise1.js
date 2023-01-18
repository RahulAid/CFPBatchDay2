// Promise using resolve and reject

const ourPromise = new Promise((resolve, reject) => {
    let number = 6 + 4;
      if(number === 10) {
        resolve("Promise was fulfilled");
      } else {
        reject("Promise was rejected");
      }
    });
    console.log(ourPromise); 
    
    
    //output: Promise was fulfilled