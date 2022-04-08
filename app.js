const express= require("express");
const exp= require("express-handlebars")
const app=express();
const path = require('path')
app.use(express.static('public'))
const port=3001;
const hbs=exp.create({})
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render("about");
});
app.get('/resume', (req, res) => {
    res.render("resume");
});
app.get('/project', (req, res) => {
    res.render("blog");
});
app.get('/contact', (req, res) => {
    res.render("contact");
});
app.post('/contact', (req, res) => {
    res.status(200).send("contact");
});

app.listen(port,()=>{
    console.log("listening on port http://localhost:3001")
});