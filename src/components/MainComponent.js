import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import SurveyList from './SurveyListComponent';

class Main extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/list' component={SurveyList} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);