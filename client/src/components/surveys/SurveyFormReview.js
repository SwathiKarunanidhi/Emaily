import _ from 'lodash';
import {connect} from 'react-redux';
import formFields from './formFields';
import * as actions  from '../../actions';
import { withRouter } from 'react-router';
//SurveyFormReview shows the form to review the inputs
 const SurveyFormReview = ({onBack , formValues, submitSurvey, history}) =>
  
  {
    const reviewFields = _.map(formFields,({name,label}) => {
      return (
        <div key={name}>
            <label>{label}</label>
            <div>{formValues[name]}</div>
        </div>
      );
    });
      return (
      <div>
          {reviewFields}
         <button 
                 className ='red  btn-flat left white-text' onClick = {onBack}> 
                 Go Back 
         </button>
         <button onClick = {()=> {submitSurvey(formValues, history)}}
                 className ='green  btn-flat right white-text'> 
                 Submit Survey 
         </button>
      </div>);
  }
  function mapStateToProps (state )
  {
    //console.log(state);
    return { formValues : state.form.surveyForm.values};
  }
export default connect (mapStateToProps, actions) (withRouter(SurveyFormReview));
