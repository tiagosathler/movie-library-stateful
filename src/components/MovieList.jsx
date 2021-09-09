import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, callback } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
          callback={ callback }
        />))}
      </div>
    );
  }
}

MovieList.defaultProps = {
  callback: () => (undefined),
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  callback: PropTypes.func,
};

export default MovieList;
