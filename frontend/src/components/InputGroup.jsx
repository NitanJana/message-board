import PropTypes from 'prop-types';

const InputGroup = ({ labelText, name, id, placeholder, value, onChange }) => {
  return (
    <>
      <label htmlFor={id} className="justify-self-start text-2xl font-semibold text-primary-cream">
        {labelText}
      </label>
      <textarea
        type="text"
        name={name}
        id={id}
        minLength="3"
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        className={`w-80 resize-none rounded-md bg-primary-cream p-4 pb-0 placeholder:italic ${id === 'message' ? 'h-36' : 'h-20'} overflow-auto outline-none`}
      />
    </>
  );
};

InputGroup.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGroup;
