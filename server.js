var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')

 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
    extended: false
}))
app.get('/', function (req, res) {
    res.render('one');
});
app.get('/one', function (req, res) {
    res.render('one');
});

app.get('/two', function (req, res) {
    res.render('two');
});
 
app.get('/three', function (req, res) {
    res.render('three');
});
 
app.get('/four', function (req, res) {
    res.render('four');
});
 
 
// app.get("/two",(req,res)=>{
//     res.send("this is a home page");
// })
// app.post("/form",(req,res)=>{
//     let name=req.body.name;
//     res.send(`this is a form page ${name}`);

// })
// app.get("/profile",(req,res)=>{
//     res.send("this is a profile page");
// })
// app.get("/email",(req,res)=>{
//     res.send("this is a email page");
// })
app.listen(3000,() =>{
console.log("terinal is running")
});