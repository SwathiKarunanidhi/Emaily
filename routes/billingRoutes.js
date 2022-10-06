const Keys = require('../config/keys');
const stripe = require('stripe')(Keys.stripeSecretKey);
const requireLogin = require ('../middlewares/requireLogin');
module.exports = app  => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    /*const charge = await stripe.charges.create ({
      amount: 500,
      currency :'inr',
      description:'$5 for 5 Credits',
      source:req.body.id
   });*/
   req.user.credits +=5;
   const user = await req.user.save();
   res.send(user);
  
  });
   app.get('/api/test',(req,res)=>{
     res.send("success");
   })        
};