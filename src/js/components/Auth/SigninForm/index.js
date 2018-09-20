import React, { PureComponent } from 'react';
import {
  Form, Segment, Input, Button,
} from 'semantic-ui-react';

class SigninForm extends PureComponent {
  state = {
    email: '',
    password: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  signinUser = e => {
    e.preventDefault();
    const { signinUser } = this.props;
    const { email, password } = this.state;
    const payload = {
      email,
      password,
    };
    signinUser(payload);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Form onSubmit={this.signinUser}>
          <Segment>
            <Input
              type="text"
              name="email"
              placeholder="your_email@mail.com"
              value={email}
              onChange={this.handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="type your password"
              value={password}
              onChange={this.handleChange}
            />
            <Button>Sign_in</Button>
          </Segment>
        </Form>
      </div>
    );
  }
}

export default SigninForm;
