import React from 'react';
import PropTypes from 'prop-types';

class SearchFormInputText extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <div className="mb-3">
        <label
          id="text-input-label"
          data-testid="text-input-label"
          htmlFor="text-input"
          className="form-label"
        >
          Inclui o texto:
          <input
            id="text-input"
            type="text"
            data-testid="text-input"
            value={ value }
            onChange={ callback }
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

SearchFormInputText.defaultProps = {
  value: '',
  callback: () => (undefined),
};

SearchFormInputText.propTypes = {
  value: PropTypes.string,
  callback: PropTypes.func,
};

export default SearchFormInputText;
