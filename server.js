const express=require('express');
const hbs=require('hbs');

const port=process.env.PORT || 3000;
var app=express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname+"/views/partials");
app.use(express.static(__dirname+"/public"));
hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
});
app.get("/",(req,res)=>{
  res.render("home.hbs",{
    pageTitle:'Home Page',
    welcome: 'Welcome to my Website',
    currentYear:new Date().getFullYear()
  });
});

app.get("/about",(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear:new Date().getFullYear()
  });
});

app.get("/bad",(req,res)=>{
  res.send({
    errorMessage:"Unable to handle the request"
  });
});

app.listen(port,()=>{
  console.log("server started");
});
