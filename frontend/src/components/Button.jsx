import PropTypes from 'prop-types';

const Button = ({children }) => {
  return (
    <button className="rounded-md border bg-primary-cream px-4 py-3 font-bold text-primary-blue transition duration-300 hover:bg-primary-blue hover:text-primary-cream">
      {children}
    </button>
  );
};

Button.propTypes = { children: PropTypes.node.isRequired };

export default Button;
