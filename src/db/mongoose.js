const mongoose = require('mongoose');

// connection
mongoose.connect(process.env.MONGODB_URL, {
   userNewUrlParser: true,
   userCreateIndex: true,
   useFindAndModify: false,
});
