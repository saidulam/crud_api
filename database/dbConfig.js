const mongoose = require("mongoose");


//const URI = "mongodb://[root:rootpassword]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]";

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