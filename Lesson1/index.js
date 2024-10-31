const express = require("express");
const app = express();
const fs = require('fs');
require("mongoose.js")
app.get("/notes", (req, res) => {
    fs.readFile(__dirname + '/notes.json', 'UTF-8', (err, data) =>{
        if(err){
            return console.log(err);
        }
        res.status(200).send(data);
    } )    

}
)

app.listen(3157, ()=> {

    console.log("The server is running on port 3157");

})

