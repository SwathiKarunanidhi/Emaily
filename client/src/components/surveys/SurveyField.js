import React from 'react';
//SurveyField contains the logic to render a single label and the text input
export default ({input, label, meta:{error,touched}}) =>
{
  return (
      <div>
        <label>{label}</label>
        <input {...input } style={{marginTop:'5px'}}/>
        <div className=" red-text" style={{marginBottom:'20px'}}>{touched && error}</div>
      </div>
  );
};