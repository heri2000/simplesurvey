import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import EditSurvey from './EditSurveyComponent';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import SurveyList from './SurveyListComponent';
import SurveyResult from './SurveyResultComponent';

class Main extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/list' component={SurveyList} />
          <Route path='/edit' component={EditSurvey} />
          <Route path='/result' component={SurveyResult} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);