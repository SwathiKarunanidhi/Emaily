import React , {Component} from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyLists extends Component {
    componentDidMount()
    {
        this.props.fetchSurveys();
    }

    renderSurveyLists()
    {
      return  this.props.surveys.map( survey => {
          return (
            <div className ='card darken-1'>
            <div className='card-content' >
              <span className='card-title'>{survey.title} </span>
              <p className='card-body'>{survey.body}</p>
              <p className='text-right'>
                  Sent On : {new Date (survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className='card-action' >
                <a>Yes: {survey.yes}</a>
                <a>No: {survey.no}</a>
            </div>
       </div>
          );
      });
    }

    render()
    {
        return (
            <div>
                {this.renderSurveyLists()}
            </div>
        );
    }
}
function mapStateToProps ({surveys})
{
    return {surveys};
}
export default connect(mapStateToProps, {fetchSurveys}) (SurveyLists)