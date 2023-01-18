// Promise

var promise = new Promise(function(resolve, reject) {
    const x = "Facctum";
    const y = "Facctum"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
        
    promise.
        then(function () {
            console.log('Success');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });
    