import React from 'react';
import List from 'components/List';
import Article from 'components/List/style';
import { shallow } from 'enzyme';

describe('<List>', () => {
  it('renders without crashing', () => {
    const articles = [];
    shallow(<List articles={articles} />);
  });

  it('renders Article component for each articles props', () => {
    const articles = [{ id: 1, title: 'foo' }, { id: 2, title: 'bar' }];
    const component = shallow(<List articles={articles} />);
    expect(component.find(Article)).toHaveLength(2);
  });
});
