import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

//SurveyNew shows SurveyForm and SurveyFormReview
class SurveyNew extends Component{
  state ={ showFormReview : false}
  renderContent()
  {
    if(this.state.showFormReview)
      {
        return <SurveyFormReview onBack ={()=>{this.setState ({showFormReview:false})}}/>
      }
    return <SurveyForm 
              onSurveySubmit = {() => {this.setState({showFormReview : true})}} 
           />
  }
  render ()
  {
      return (
      <div>
           
        {this.renderContent()}
         
      </div>);
  };
}
export default reduxForm({form:'surveyForm'})(SurveyNew);