/*const add = (a, b) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve(a+b);
       }, 2000);
    });
}*/

/*add(1, 2).then((sum) => {
    console.log(sum);

    add(sum, 2).then((sum2) => {
        console.log(sum2);
    }).catch((e) => {
        console.log(e);
    });
}).catch((e) => {
    console.log(e);
});*/

//For a better chaining:
/*add(1, 2).then((sum) => {
   console.log(sum);

   return add(sum, 3);
}).then((sum2) => {
    console.log(sum2);
}).catch((e) => {
    console.log(e);
});*/

// mongoose promises and chaining syntax:

require('../src/db/mongoose');
const User = require('../src/models/user');

// For user with _id 5dc1a37d57f2ab5e3b9e1cc3 ---> lets change age
/*
User.findByIdAndUpdate('5dc1a37d57f2ab5e3b9e1cc3', {name: "Rusty"}).then((user) => {
    console.log(user);

    return User.countDocuments({name: "Rusty"});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});
*/

// Async Await
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});

    return count;
}

updateAgeAndCount('5dc1a66be63a666239f9155d', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});