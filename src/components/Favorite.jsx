import React from 'react';
import PropTypes from 'prop-types';

class Favorite extends React.Component {
  render() {
    const { title, bookmarked, callback } = this.props;
    const id = title.toLowerCase().replace(/\s/g, '-');
    return (
      <label htmlFor={ id }>
        <input
          id={ id }
          type="checkbox"
          checked={ bookmarked }
          onChange={ () => callback(title) }
        />
        Favorito
      </label>
    );
  }
}

Favorite.defaultProps = {
  callback: () => (undefined),
  bookmarked: false,
};

Favorite.propTypes = {
  title: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool,
  callback: PropTypes.func,
};

export default Favorite;
