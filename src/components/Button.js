import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => (
  <button
    type="submit"
    onClick={onClick}
    style={{ backgroundColor: color }}
    className="btn"
  >
    {text}
  </button>
);

Button.defaultProps = {
  color: 'steelblue',
};
/* eslint-disable */
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
