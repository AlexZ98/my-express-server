const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at : 123@email.com");
});

app.get("/about", function(req, res){
    res.send("My name is Alex and I am a software engineer.");
});

app.get("/hobbies", function(req, res){
    res.send("My hobbies include gaming, watching TV/movies, and coding.")
});

app.listen(3000, function(){
    console.log("Server started on port 3000.");
});