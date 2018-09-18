import React from 'react';
import Form from 'components/Form';
import {
  FormWrapper,
  InputWrapper,
  Input,
  Label,
  Button,
} from 'components/Form/style';
import { shallow } from 'enzyme';

describe('<Form />', () => {
  it('renders without crashing', () => {
    shallow(<Form />);
  });

  it('has child components', () => {
    const component = shallow(<Form />);

    expect(component.find(FormWrapper)).toHaveLength(1);
    expect(component.find(InputWrapper)).toHaveLength(1);
    expect(component.find(Input)).toHaveLength(1);
    expect(component.find(Label)).toHaveLength(1);
    expect(component.find(Button)).toHaveLength(1);
  });

  it('handles onSubmit', () => {
    const mockFn = jest.fn();
    const component = shallow(<Form addArticle={mockFn} />);

    component
      .find(FormWrapper)
      .simulate('submit', { preventDefault: () => {} });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('calls handleChange', () => {
    const component = shallow(<Form />);
    const targetValue = { value: 'Test title' };

    component.find(Input).simulate('change', { target: targetValue });
    expect(component.state().title).toEqual('Test title');
  });
});
