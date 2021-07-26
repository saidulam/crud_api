

const express = require("express");
const connection = require('./database/dbConfig')
const app = express();
const bodyParser = require('body-parser')



//my Routes

 const userRoutes = require("./routes/user");


//DBConnection
connection();


    //middlewares
    app.use(bodyParser.json());
    
   //My Routes


    app.use("/api", userRoutes);
   

 //Port
 const port = process.env.PORT || 8000;

 //Starting a Server
 app.listen(port, () => {
console.log(`app is running at ${port}`);

 });