const keys = require ('../../config/keys');
module.exports = survey => {
    return `
      <html>
       <body>
         <div style="text-align :center;">
          <h3>I'd Like your input!</h3>
          <p> Please answer the following question:</p>
          <p> ${survey.body}</p>
          <div>
          <a href="${keys.redirectDomain}/api/surveys/${surveyid}/Yes">Yes</a>
          </div>
          <div>
          <a href="${keys.redirectDomain}/api/surveys/${surveyid}/No">No</a>
          </div>
         </div>
       </body>
      </html>
    `;
};