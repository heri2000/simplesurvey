import { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components'
import './LoginComponent.css';

class Login extends Component {
  render() {
    return(
      <div className="Login-bg">
        <FadeTransform in transformProps={{ exitTransform: 'translateY(-20px)' }}>
          <div className="col-12 mt-5 text-center Login-title">
            <h2>The Simple Survey</h2>
          </div>
          <div className="col-12 mt-5 row justify-content-evenly">
            <LoginForm />
            <div className="col-11 col-md-5 mb-5 order-md-1 align-middle Login-intro">
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi vel vehicula elit, elementum efficitur leo.
                Cras hendrerit nibh vitae convallis posuere.
                Mauris sagittis, enim nec lacinia sodales, velit nunc tempor nisl,
                nec gravida justo ex eu magna.
              </p>
            </div>
          </div>
        </FadeTransform>
      </div>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleFieldChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ ...this.state, [name]: value });
  }
  
  handleLogin(event) {
    this.setState({ ...this.state, disabled: true });
    this.history.replace("/main");
    event.preventDefault();
  }

  handleDemoLogin(event) {
    this.handleLogin(event);
  }

  render() {
    return(
      <div className="col-11 col-md-5 mb-5 order-md-2 Login-form">
        <Form onSubmit={this.handleLogin} className="m-3 mt-4 mb-4">
          <FormGroup className="mb-2">
            <h4 className="text-center">Login</h4>
          </FormGroup>
          <FormGroup className="mb-2">
            <Label htmlFor="email">Email</Label>
            <Input type="text" id="email" name="email"
              value={this.state.email} onChange={this.handleFieldChange}
              disabled={this.state.disabled} />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password"
              value={this.state.password} onChange={this.handleFieldChange}
              disabled={this.state.disabled} />
          </FormGroup>
          <FormGroup className="mb-4" check>
            <Label check>
              <Input type="checkbox" id="remember" name="remember"
                checked={this.state.remember} onChange={this.handleFieldChange}
                disabled={this.state.disabled} />
                  Remember me
            </Label>
          </FormGroup>
          <FormGroup row>
            <Col xs={{size: 3}}>
              <Button type="submit" color="primary"
                disabled={this.state.disabled}>Login</Button>
            </Col>
            <Col className="col-7 offset-2 d-flex justify-content-center pt-2">
              Don't&nbsp;have&nbsp;account?&nbsp;<Link to="register">Register</Link>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col className="col-7 offset-5 d-flex justify-content-center">
              or
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col className="col-7 offset-5 d-flex justify-content-center">
              <Button type="button"
                disabled={this.state.disabled}
                className="Demo-login-button"
                onClick={this.handleDemoLogin}>Demo Login</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Login;
