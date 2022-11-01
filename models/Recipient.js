const mongoose = require ('mongoose');
const {Schema} = mongoose;

const recipientSchema = new Schema ({
  email :  String,
  responded :{type : Boolean, default : false}
});

//mongoose.model('recipent',recipientSchema); --> regular method
//for subdocument -->
module.exports  = recipientSchema;