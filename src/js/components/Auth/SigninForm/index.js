import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Form, Segment, Input, Button, Image, Label,
} from 'semantic-ui-react';
import logo from 'images/framgia_logo.png';
import PropTypes from 'prop-types';
import { Container } from './styles';

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
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      return (
        <Redirect to="/mypage" />
      );
    }

    return (
      <div>
        <Segment>
          <Image src={logo} alt="logo" height="60" inline />
          <span display="inline">report system</span>
        </Segment>

        <Container>
          <Form onSubmit={this.signinUser}>

            <Segment>
              <Label attached="top">Sign_in</Label>
              <Form.Field>
                <label>email</label>
                <Input
                  type="text"
                  name="email"
                  placeholder="your_email@mail.com"
                  value={email}
                  onChange={this.handleChange}
                />

                <label>password</label>
                <Input
                  type="password"
                  name="password"
                  placeholder="type your password"
                  value={password}
                  onChange={this.handleChange}
                />

              </Form.Field>
              <Button type="submit">Sign_in</Button>
            </Segment>
          </Form>
        </Container>
      </div>
    );
  }
}

SigninForm.propTypes = {
  signinUser: PropTypes.func,
};

export default SigninForm;
