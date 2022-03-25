//Backend file for Grocery Shop 

//Import the express npm module
const express = require('express');
//Create a new web server 
const app = express();
//Connecting with front end files (= statitc resources)
app.use(express.static('frontend'));
//Starting web server 
app.listen(3000,()=> console.log('Listening on http://localhost:3000'));
//console.log: show output on console (terminal)

//Connect to db and create minimal REST-api
const betterSqlite3 = require ('better-sqlite3');
const { response } = require('express');

//Creating connection to the db
const db = betterSqlite3('./database/product.db');

//create a rest route usting express web server(app)
app.get ('/api/product', (request, response) =>{
    //Prepared statement (SQL query)
    const stmt = db.prepare('SELECT * FROM product');
    //run the prepared statement 
    let result = stmt.all();
    //Send the result to the client
    response.json(result);

   
});



//console.log (result);

