import React from 'react';
import PropTypes from 'prop-types';

class AMSelect extends React.Component {
  render() {
    const { options, value, call } = this.props;
    const { name, id, content, optionTag } = options;
    const { optionTagValue, optionTagContent } = optionTag;

    return (
      <div className="mb-3">
        <label
          data-testid={ `${id}-input-label` }
          htmlFor={ `${id}-input` }
          className="form-label"
        >
          { content }
          <select
            id={ `${id}-input` }
            data-testid={ `${id}-input` }
            name={ name }
            value={ value }
            onChange={ call }
            className="form-select"
          >
            { optionTagValue.map((x, i) => (
              <option
                value={ x }
                key={ x }
                data-testid={ `${id}-option` }
              >
                { optionTagContent[i] }
              </option>
            )) }
          </select>
        </label>
      </div>
    );
  }
}

AMSelect.defaultProps = {
  options: {
    name: '',
    id: '',
    content: '',
    optionTag: [],
  },
  value: '',
  call: () => (undefined),
};

AMSelect.propTypes = {
  options: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
    optionTag: PropTypes.shape(
      [PropTypes.arrayOf(PropTypes.string)],
      [PropTypes.arrayOf(PropTypes.string)],
    ),
  }),
  value: PropTypes.string,
  call: PropTypes.func,
};

export default AMSelect;
