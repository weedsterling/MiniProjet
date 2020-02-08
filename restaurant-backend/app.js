const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


// for route
const restaurantroute=require('./route/restaurant');

mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true});
mongoose.Promise=global.Promise;

//for log the request  
app.use(morgan('dev'));

//for get data
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//handling CORS
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers",
    "Origin, X-request-With, Content-Type, Accept, Authorization"
    );
    if(req.method=='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PACTH,DELETE,GET');
        return res.status(200).json({}); 
    }
    next();
});


//route which should handle requests
app.use('/restaurants', restaurantroute);

app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports=app;