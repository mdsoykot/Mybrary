const express=require('express');
const app=express();
const expressLayouts=require('express-ejs-layouts');
const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/mybraryDB', {useNewUrlParser: true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("Connected to Mongoose");
    }else{
        console.log(err);
    }
});


const indexRouter=require('./routers/index');


app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('layout','layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'));
app.use('/',indexRouter);

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running");
});