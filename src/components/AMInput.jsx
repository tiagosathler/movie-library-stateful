import React from 'react';
import PropTypes from 'prop-types';

class AMInput extends React.Component {
  render() {
    const { options, value, call } = this.props;
    const { type, name, id, content } = options;

    return (
      <div className="mb-3">
        <label
          data-testid={ `${id}-input-label` }
          htmlFor={ `${id}-input` }
          className="form-label"
        >
          { content }
          <input
            id={ `${id}-input` }
            type={ type }
            data-testid={ `${id}-input` }
            name={ name }
            value={ value }
            onChange={ call }
            max="5"
            min="0"
            step="0.1"
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

AMInput.defaultProps = {
  options: {
    type: '',
    name: '',
    id: '',
    content: '',
  },
  value: '',
  call: () => (undefined),
};

AMInput.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  call: PropTypes.func,
};

export default AMInput;
