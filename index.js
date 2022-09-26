//Importing Express -- to communicate with fronten and backend
const express = require('express');
//Importing mongoose -- to communicate with MongoDB
const mongoose = require('mongoose');
const Keys = require('./config/keys');

//Importing cookie-session and passport  -- to make use of cookie
const cookieSession = require ('cookie-session');
const passport = require ('passport');

//returns the function / executes
require('./models/User');
require('./services/passport');

//Connecting mongoose to DB -- argument <Addres>
mongoose.connect(Keys.mongoURI)

//Creating Express application by calling express() method
const app = express();

//Enabling Cookies
app.use(cookieSession ({
    maxAge : 30*24*60*60*1000,
    keys : [Keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());



//returns the function and immediately calls
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000 ;
app.listen(PORT);

//
/*app.get('/',(req,res)=>{
    res.send({hi:"World"});
});*/