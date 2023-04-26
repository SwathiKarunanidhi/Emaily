const mongoose = require('mongoose');
const {Schema} = mongoose;
//creating schema
const userSchema = new Schema ({
    googleId: String,
    credits : {
        type: Number,
        default: 0
    }

});
//creating collection
mongoose.model('users',userSchema);
