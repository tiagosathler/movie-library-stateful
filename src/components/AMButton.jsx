import React from 'react';
import PropTypes from 'prop-types';

class AMButton extends React.Component {
  render() {
    const { options, call } = this.props;
    const { type, form, id, content } = options;

    return (
      <button
        id={ `${id}-${type}` }
        form={ form }
        type="submit"
        data-testid={ `${id}-${type}` }
        onClick={ call }
        className="btn btn-primary"
      >
        { content }
      </button>
    );
  }
}

AMButton.defaultProps = {
  options: {
    type: '',
    form: '',
    id: '',
    content: '',
  },
  call: () => (undefined),
};

AMButton.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string,
    form: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  call: PropTypes.func,
};

export default AMButton;
