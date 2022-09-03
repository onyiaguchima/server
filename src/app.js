// const hbs = require("hbs")
const path = require("path")
const express = require("express");
const app = express();
const route = path.join(__dirname, "../public");
const port = process.env.PORT || 3000

app.use(express.static(route));
app.set("view engine", "hbs");
// app.set('views', __dirname + '/views');
app.get("", (req, res) =>{
    res.render("index", {name: "chimbonda"});
});

app.get("/about", (req, res)=>{
    res.render("about");
    console.log("weq");  
});

app.get("/products", (req, res)=>{
    res.send({
        products: []
    })
    console.log(req.query);
});

app.get("*", (req, res)=>{
    res.send("my 404page");
});



app.listen(port, ()=>{
    console.log("server is running on port 3000");
});