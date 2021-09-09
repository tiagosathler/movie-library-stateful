import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

function applyFilter(array, { content, marked, type }) {
  let result = array;
  const search = content.toLowerCase();
  if (search) {
    result = result.filter(
      ({ title, subtitle, storyline }) => title.toLowerCase().includes(search)
          || subtitle.toLowerCase().includes(search)
          || storyline.toLowerCase().includes(search),
    );
  }
  if (marked) {
    result = result.filter(({ bookmarked }) => bookmarked);
  }
  if (type) {
    result = result.filter(({ genre }) => genre === type);
  }
  return result;
}

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      allMovies: movies,
    };

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onFavorite = this.onFavorite.bind(this);
  }

  onFavorite(name) {
    const { allMovies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const index = allMovies.findIndex(({ title }) => title === name);
    allMovies[index].bookmarked = !allMovies[index].bookmarked;
    const movies = applyFilter(allMovies,
      { content: searchText, marked: bookmarkedOnly, type: selectedGenre });
    this.setState({
      movies,
      allMovies,
    });
  }

  onClick(movie) {
    const { allMovies } = this.state;
    this.setState({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...allMovies, movie],
      allMovies: [...allMovies, movie],
    });
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { allMovies, bookmarkedOnly, selectedGenre } = this.state;
    const movies = applyFilter(allMovies,
      { content: value, marked: bookmarkedOnly, type: selectedGenre });
    this.setState({
      searchText: value,
      movies,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { allMovies, searchText, selectedGenre } = this.state;
    const movies = applyFilter(allMovies,
      { content: searchText, marked: checked, type: selectedGenre });
    this.setState({
      bookmarkedOnly: checked,
      movies,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { allMovies, searchText, bookmarkedOnly } = this.state;
    const movies = applyFilter(allMovies,
      { content: searchText, marked: bookmarkedOnly, type: value });
    this.setState({
      selectedGenre: value,
      movies,
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
          callback={ this.onFavorite }
        />
        <AddMovie
          onClick={ this.onClick }
        />
      </div>
    );
  }
}

MovieLibrary.defaultProps = {
  movies: [{}],
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieLibrary;
