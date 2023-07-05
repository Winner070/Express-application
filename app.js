const express = require ('express');
const app= express();

app.set("view engine", "ejs");
 const port = 800;

 app.get("/house", (req, res) => {
   // res.send("I am Home")

   res.render("index")
//console.log()

 })

 app.listen(port, () => {
    console.log("App is listening port");
 })

