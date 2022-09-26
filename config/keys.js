//logic to decide whether we are in dev or prod
//using heroku env variables
if(process.env.NODE_ENV==='production')
{
 //we are in Production
 module.exports = require('./prod');
}
else
{
 //we are in development
module.exports = require('./dev');
}