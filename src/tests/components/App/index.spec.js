import React from 'react';
import App from 'components/App';
import MainWrapper from 'components/App/MainWrapper.style';
import ListContainer from 'containers/ListContainer';
import FormContainer from 'containers/FormContainer';

import { shallow } from 'enzyme';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('changes locale depending on props', () => {
    const component = shallow(<App locale="en" />);
    expect(component.find('IntlProvider').prop('locale')).toEqual('en');
  });

  it('has child components', () => {
    const component = shallow(<App />);

    expect(component.find(MainWrapper)).toHaveLength(1);
    expect(component.find(ListContainer)).toHaveLength(1);
    expect(component.find(FormContainer)).toHaveLength(1);
  });

  it('handle onChange', () => {
    const mockFn = jest.fn();
    const component = shallow(<App setLocale={mockFn} />);

    component.find('select').simulate('change', { target: { value: 'ja' } });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
