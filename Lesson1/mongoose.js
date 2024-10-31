const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/notes-api', {
    //we set some rules inside this parser 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
