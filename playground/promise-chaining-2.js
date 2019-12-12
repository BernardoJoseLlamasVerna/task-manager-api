require('../src/db/mongoose');
const Task = require('../src/models/task');

/*
Task.findByIdAndDelete('5dc1a72b97d0596314b6b89e').then((task) => {
    console.log(task);

    return Task.countDocuments({completed: true})
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});*/


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndUpdate(id);
    const count = await Task.countDocuments({completed: false});

    return count;
}

deleteTaskAndCount('5dcc33bde76cac7413857594').then((count) => {
    console.log(count);
}).catch((e) => {
   console.log(e);
});