import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './LoginComponent';
import Register from './RegisterComponent';

class Main extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    );
  }
}

export default Main;