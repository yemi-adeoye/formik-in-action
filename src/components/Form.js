import GenericInput from './GenericInput';
import PasswordError from './PasswordError';
import PropTypes from 'prop-types';

const Form = ({
  fields,
  onChangeHandler,
  onSubmitHandler,
  values,
  errors,
  passwordError,
}) => {
  const inputs = fields.map((field, count) => {
    return (
      <GenericInput
        type={field.type}
        fieldName={field.name}
        id={field.name}
        onChangeHandler={onChangeHandler}
        value={values[field.name]}
        label={field.label}
        key={count}
        error={errors[field.name]}
      />
    );
  });

  return (
    <form onSubmit={onSubmitHandler}>
      {' '}
      {inputs} <PasswordError passwordError={passwordError} />{' '}
      <input type='submit' value='Register' />
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.array.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  passwordError: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
};
export default Form;
