import React from 'react';
import PropTypes from 'prop-types';

class SearchFormSelect extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <div className="mb-3">
        <label
          id="select-input-label"
          data-testid="select-input-label"
          htmlFor="select-input"
          className="form-label"
        >
          Filtrar por gênero
          <select
            id="select-input"
            data-testid="select-input"
            value={ value }
            onChange={ callback }
            className="form-select"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SearchFormSelect.defaultProps = {
  value: '',
  callback: () => (undefined),
};

SearchFormSelect.propTypes = {
  value: PropTypes.string,
  callback: PropTypes.func,
};

export default SearchFormSelect;
