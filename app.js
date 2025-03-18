//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const collection = require('./db');
const leave_collection = require('./db_leave');

const app = express();

// const viewDirectory = path.join(__dirname,'./views');
// app.use(express.static(viewDirectory));

app.use('/' , require('./routes/pages'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

dotenv.config({ path: './.env' });

app.set('view engine' , 'ejs')

//Registration
app.post("/register" , async(req,res)=>{
    const data ={
        username : req.body.username,
        password : req.body.password
    }
await collection.insertMany([data]);
res.render('login')
})


//Login
app.post('/login' , async(req,res)=>{
    try {
        const check  = await collection.findOne({username:req.body.username})

        if(check.password === req.body.password)
        {
            res.render('dashboard');
        }else{
            res.send('Wrong Password , Try Again')
        }
    } catch (error) {
        console.log(error);
        
    }
})

//Leaves
app.post('/general_leave' , async(req,res)=>{
    const leavedata={
        name : req.body.name,
        phone : req.body.phone,
        fromdate : req.body.fromDate,
        todate : req.body.toDate,
        description : req.body.leaveDescription
    }
   

    await leave_collection.insertMany([leavedata]);
    res.render('dashboard');
    console.log([leavedata])
})


//Port Listener
port = 3000;
app.listen(port || 3000, (req, res) => {
    console.log(`Server is running at ${port}`);
})