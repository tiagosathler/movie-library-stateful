import React from 'react';
import PropTypes from 'prop-types';

class AMTextarea extends React.Component {
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
          <textarea
            id={ `${id}-input` }
            type={ type }
            data-testid={ `${id}-input` }
            name={ name }
            value={ value }
            onChange={ call }
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

AMTextarea.defaultProps = {
  options: {
    type: '',
    name: '',
    id: '',
    content: '',
  },
  value: '',
  call: () => (undefined),
};

AMTextarea.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  value: PropTypes.string,
  call: PropTypes.func,
};

export default AMTextarea;
