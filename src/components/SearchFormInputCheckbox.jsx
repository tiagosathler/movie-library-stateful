import React from 'react';
import PropTypes from 'prop-types';

class SearchFormInputCheckbox extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <div className="mb-3 form-check">
        <label
          id="checkbox-input-label"
          data-testid="checkbox-input-label"
          htmlFor="checkbox-input"
          className="form-check-label"
        >
          <input
            id="checkbox-input"
            type="checkbox"
            data-testid="checkbox-input"
            checked={ value }
            onChange={ callback }
            className="form-check-input"
          />
          Mostrar somente favoritos
        </label>
      </div>
    );
  }
}

SearchFormInputCheckbox.defaultProps = {
  value: false,
  callback: () => (undefined),
};

SearchFormInputCheckbox.propTypes = {
  value: PropTypes.bool,
  callback: PropTypes.func,
};

export default SearchFormInputCheckbox;
