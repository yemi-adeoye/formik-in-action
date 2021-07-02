import PropTypes from 'prop-types';

const GenericInput = ({
  type,
  fieldName,
  onChangeHandler,
  error,
  value,
  label,
}) => {
  return (
    <>
      <span className='error'> {error} </span>
      <label htmlFor={fieldName}> {label} </label>
      <input
        type={type}
        name={fieldName}
        id={fieldName}
        onChange={onChangeHandler}
        value={value}
      />
    </>
  );
};

GenericInput.propTypes = {
  type: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default GenericInput;
