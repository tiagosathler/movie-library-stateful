import React from 'react';
import PropTypes from 'prop-types';
import AMInput from './AMInput';
import AMTextarea from './AMTextarea';
import AMSelect from './AMSelect';
import AMButton from './AMButton';
import setupFormInputs from './addMovieSetup';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value, type } = target;
    this.setState({
      [name]: type === 'number' ? Number(value) : value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const movie = this.state;
    const validate = Object.entries(movie).reduce((acc, [key, value]) => (
      acc ? !(value === '' && key !== 'imagePath') : acc
    ), true);
    if (validate) {
      const { onClick } = this.props;
      onClick({ ...movie, bookmarked: false });
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      });
    }
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { tit, sub, img, rat, txt, sel, btn } = setupFormInputs;
    return (
      <section className="add-movie-section">
        <form data-testid="add-movie-form" className="add-movie-form">
          <div className="add-movie-colunm">
            <AMInput options={ tit } value={ title } call={ this.handleChange } />
            <AMInput options={ sub } value={ subtitle } call={ this.handleChange } />
            <AMInput options={ img } value={ imagePath } call={ this.handleChange } />
          </div>
          <div className="add-movie-colunm">
            <AMTextarea options={ txt } value={ storyline } call={ this.handleChange } />
            <AMInput options={ rat } value={ rating } call={ this.handleChange } />
            <AMSelect options={ sel } value={ genre } call={ this.handleChange } />
          </div>
        </form>
        <div>
          <AMButton options={ btn } call={ this.handleClick } />
        </div>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
