const passport = require('passport');
module.exports = app => {
//auth route handler            
app.get('/auth/google', passport.authenticate('google',
{scope : ['profile','email']}
));

//followback route handler
app.get( '/auth/google/callback',
          passport.authenticate('google'),
          (req,res) =>
              {
                 res.redirect('/surveys');
              }
);

//to get current user details
app.get('/api/currentUser', (req, res) =>
{
    res.send(req.user); // passport attaches user automatically to req
});
//Logout
app.get('/api/logout',(req, res) => 
{
   req.logout(); // passport attaches logout() automatically to req
   res.redirect('/');
})

};


