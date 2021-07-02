import PropTypes from 'prop-types';

const TextInput = ({ fieldName, onChangeHandler }) => {
  return <input type='text' name={fieldName} onChange={onChangeHandler} />;
};

TextInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default TextInput;
