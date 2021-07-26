const mongoose = require("mongoose");


const URI = "mongodb+srv://dbuser:dbuser@crudapi.dzapy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connection = async () =>{
try {
    await mongoose.connect(URI, {useNewUrlParser: true,
        useUnifiedTopology: true
    });
        console.log("db is up and running");
    } 

catch (error) {
    console.log(error);
}
}

module.exports = connection;