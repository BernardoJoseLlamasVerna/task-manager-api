// callback to promises (example)
const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is my error!', undefined);
        callback(undefined, [1, 4, 7]);

    }, 2000);
}

doWorkCallback((error, result) => {
   if(error) {
       return console.log(error)
   }

   console.log(result);
});

// promises on mongodb:
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve( [1, 4, 7]);
        reject('Things went wrong!');

    }, 2000);
});

// ---> we need to access to doWorkPromise (is an object) to show any info.:
doWorkPromise.then((result) => {
   console.log('Success!', result);
}).catch((error) => {
    console.log('Error!', error);
});

// ---> when we use callbacks functions we need if conditions to set a message if something went wrong, but
// in mongo promises we need to set a then() and catch()
// ===> two separate functions (it makes easier to manage our asynchronous tasks)