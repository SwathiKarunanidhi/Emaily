//Importing Express -- to communicate with frontend and backend
const express = require('express');
//Importing mongoose -- to communicate with MongoDB
const mongoose = require('mongoose');
const Keys = require('./config/keys');

//Importing cookie-session and passport  -- to make use of cookie
const cookieSession = require ('cookie-session');
const passport = require ('passport');

//Import body-parser to parse the incoming request
const bodyParser = require('body-parser');

//returns the function / executes
require('./models/User');
require('./services/passport');
require('./models/Survey');

//Connecting mongoose to DB -- argument <Addres>
mongoose.connect(Keys.mongoURI)

//Creating Express application by calling express() method
const app = express();

//Enabling bodyparser
app.use(bodyParser.json());

//Enabling Cookies
app.use(cookieSession ({
    maxAge : 30*24*60*60*1000,
    keys : [Keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());


//returns the function and immediately calls

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

//handle the routes in the production form client side
if(process.env.NODE_ENV === 'production')
{
    //Express will serve production assests like main.js or main.css file!!
    app.use(express.static('client/build'));
 
    //Express will serve up the index.html file if it doesn't recognize the route!
    const path= require('path');
    app.get('*', (req,res) => {
     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const PORT = process.env.PORT || 5000 ;
app.listen(PORT);

//
/*app.get('/',(req,res)=>{
    res.send({hi:"World"});
});*/