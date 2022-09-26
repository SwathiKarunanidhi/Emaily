const mongoose = require('mongoose');
const {Schema} = mongoose;
//creting schema
const userSchema = new Schema ({
    googleId: String
});
//creating collection
mongoose.model('users',userSchema);
