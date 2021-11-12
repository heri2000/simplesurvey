import { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components'
import './RegisterComponent.css';

class Register extends Component {
  render() {
    return(
      <div className="Register-bg">
        <FadeTransform in transformProps={{
            exitTransform: 'translateY(-20px)',
            style: {
              width: '100vw'
            }
          }}>
          <div className="col-12 mt-5 text-center Login-title">
            <h2>The Simple Survey</h2>
          </div>
          <div className="col-12 mt-5 row justify-content-center">
            <RegisterForm />
          </div>
        </FadeTransform>
      </div>
    );
  }
}

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleFieldChange(event) {
    const target = event.target;
    const value = event.value;
    const name = target.name;
    this.setState({ ...this.state, [name]: value });
  }
  
  handleRegister(event) {
    this.setState({ ...this.state, disabled: true });
    this.history.replace("/login");
    event.preventDefault();
  }

  render() {
    return(
      <div className="col-11 col-md-6 col-xl-4 Register-form">
        <Form className="m-3 mt-4 mb-4">
          <FormGroup className="mb-2">
            <h4 className="text-center">Register</h4>
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
          <FormGroup className="mb-3">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input type="password" id="confirmPassword" name="confirmPassword"
              value={this.state.confirmPassword} onChange={this.handleFieldChange}
              disabled={this.state.disabled} />
          </FormGroup>
          <FormGroup row>
            <Col xs={{size: 3}}>
              <Button type="submit" color="primary"
                disabled={this.state.disabled}>Register</Button>
            </Col>
            <Col className="col-7 offset-2 d-flex justify-content-center pt-2">
              Have&nbsp;an&nbsp;account?&nbsp;<Link to="/">Login</Link>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Register;
