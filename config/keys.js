//logic to decide whether we are in dev or prod
//using heroku env variables
if(process.env.NODE_ENV==='production')
{
 //we are in Production
 modules.export = require('./prod');
}
else
{
 //we are in development
modules.exports = require('./dev');
}