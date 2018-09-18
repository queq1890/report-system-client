import React from 'react';
import PropTypes from 'prop-types';
import Article from './style';

const List = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <Article className="list-group-item" key={el.id}>
        {el.title}
      </Article>
    ))}
  </ul>
);

List.propTypes = {
  articles: PropTypes.arrayOf(Object),
};

export default List;
