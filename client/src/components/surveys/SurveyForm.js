import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
//SurveyForm shows form for user to enter inputs
class SurveyForm extends Component{
  
  renderFields()
  {
    return _.map(formFields, ({label,name}) =>
    {
      return (<Field key={name} type ='text' component ={SurveyField} label ={label} name={name}/>)
    }
   );
      
        
  }
  render ()
  {
      return (
      <div>
         <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
             {this.renderFields()}
             <Link to ='/surveys' className ='red btn-flat left white-text'>Cancel</Link>
             <button type='submit' className ='green btn-flat right white-text'>Submit</button>
          </form> 
      </div>);
  }
  
}
function validate (values)
{
   const errors ={};
   errors.recipients = validateEmails(values.recipients || '');
   _.each(formFields,({name})=>
   {
     if(!values[name])
      {errors[name]= 'Please enter the value';}
   })
   
   return errors;

}
export default reduxForm({ validate:validate, form : 'surveyForm', destroyOnUnmount:false }) (SurveyForm);