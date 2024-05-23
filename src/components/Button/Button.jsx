import PropTypes from 'prop-types';

const Button = ({ className, disabled, text, action, size, type }) => {
  return (
    <button
      disabled={!!disabled}
      onClick={action}
      type={type}
      className={`bg-vaki-primary text-white hover:opacity-90 rounded cursor-pointer ${
        className ?? ''
      } ${size === 'md' ? 'px-3 py-2' : 'px-2 py-1'} ${
        disabled ? 'cursor-not-allowed opacity-70' : ''
      }`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
