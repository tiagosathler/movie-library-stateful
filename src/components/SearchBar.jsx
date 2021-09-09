/* eslint-disable max-lines-per-function */
import React from 'react';
import PropTypes from 'prop-types';
import SearchFormInputText from './SearchFormInputText';
import SearchFormInputCheckbox from './SearchFormInputCheckbox';
import SearchFormSelect from './SearchFormSelect';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, // uma string
      onSearchTextChange, // uma callback
      bookmarkedOnly, // um boolean
      onBookmarkedChange, // uma callback
      selectedGenre, // uma string
      onSelectedGenreChange, // uma callback
    } = this.props;
    return (
      <section className="search-bar">
        <form
          data-testid="search-bar-form"
          className="search-bar-elements"
        >
          <SearchFormInputText
            value={ searchText }
            callback={ onSearchTextChange }
          />
          <SearchFormInputCheckbox
            value={ bookmarkedOnly }
            callback={ onBookmarkedChange }
          />
          <SearchFormSelect
            value={ selectedGenre }
            callback={ onSelectedGenreChange }
          />
        </form>
      </section>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => (undefined),
  bookmarkedOnly: false,
  onBookmarkedChange: () => (undefined),
  selectedGenre: '',
  onSelectedGenreChange: () => (undefined),
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
