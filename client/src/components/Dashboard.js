import react from 'react';
import { Link } from 'react-router-dom';
import SurveyLists from './surveys/SurveyLists';
const Dashboard =  ( ) =>
{
  return (
      <div>
          <SurveyLists/>
          <div className = 'fixed-action-btn'>
              <Link to ='/api/surveys/new' className='btn-floating btn-large red'>
                  <i className='material-icons'>+</i>
              </Link>

          </div>
      </div>
  );
};
export default Dashboard;