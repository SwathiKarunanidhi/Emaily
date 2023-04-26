const requireLogin = require ('../middlewares/requireLogin');
const requireCredits = require ('../middlewares/requireCredits');
const Mailer = require ("../services/Mailer");
const surveyTemplate = require ('../services/emailTemplates/surveyTemplates');
const mongoose = require ('mongoose');
const Survey = mongoose.model('surveys');
const _ = require ('lodash');
const {Path} = require ('path-parser');
const {URL} = require ('url');

module.exports = app => 
{
    app.get('/api/surveys/:surveyId/:choice',(req,res)=>{
        res.send('Thanks for your feedback!!');
    });
    app.get('/api/surveys', requireLogin, async (req,res) => {
        const survey = await Survey.find({_user : req.user.id}).select({recipienSts:false}); 
        res.send(survey);
    })
    app.post('/api/surveys', requireLogin ,requireCredits, async (req,res) => {
     
        const {title, subject, body , recipients} = req.body;
        const survey = new Survey (
         {
             title,
             subject,
             body, 
             recipients : recipients.split(',').map(email => ({email : email.trim()})),
             _user : req.user.id,
             dateSent: Date.now()
            });

            const mailer = new Mailer(survey, surveyTemplate(survey));
            await mailer.send();
            await survey.save();
            req.user.credits-=1;
            const user = await req.user.save();
            res.send(user);
        
    });
    app.post('/api/surveys/webhooks', (req,res) =>
      {
        const p = new Path ('/api/surveys/:surveyId/:choice');
        _.chain(req.body)
         //map over and extract only the required date
         .map(req.body,({email,url}) => {
            const pathName = new URL(url).pathname;
            
            const match = p.test(pathName);
            if(match)
            {
                return { email, surveyId : match.surveyId, choice : match.choice }
            }
            
         })
         .compact()
         .uniqBy('email','surveyId')
         .each(({surveyId, email, choice}) => {
                  Survey.updateOne(
                      {
                          _id : surveyId, 
                          recipients :{
                              $elemMatch:{ email : email, responded: false}
                                       }
                      },
                      {
                          $inc :{[choice]: 1},
                          $set :{'recipients.$.responded': true}
                      }
                  ).exec();
            })
         .value();
      })

    
};