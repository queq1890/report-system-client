import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuidvl from 'uuid';
import { FormattedMessage } from 'react-intl';
import {
  FormWrapper, InputWrapper, Input, Label, Button,
} from './style';

class Form extends PureComponent {
  state = {
    title: '',
  };

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidvl();
    const { addArticle } = this.props;

    addArticle({ title, id });
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;
    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <InputWrapper>
          <Label htmlFor="title">
            <FormattedMessage id="article.title" />
            <Input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </Label>
        </InputWrapper>
        <Button type="submit" className="btn btn-success btn-lg">
          SAVE
        </Button>
      </FormWrapper>
    );
  }
}

Form.propTypes = {
  addArticle: PropTypes.func,
};

export default Form;
