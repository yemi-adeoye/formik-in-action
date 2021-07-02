import PropTypes from 'prop-types';

const PasswordError = (passwordError) => {
  const {
    containsDigit,
    containsUpperCase,
    containsLowerCase,
    containsSpecialXter,
    meetsLengthReq,
  } = passwordError.passwordError;

  return (
    <div>
      <span className='pwrdError'>
        {containsDigit ? (
          <i className='fas fa-check-circle'> </i>
        ) : (
          <i className='fas fa-times-circle'> </i>
        )}
        Password must contain one or more digits
      </span>
      <span className='pwrdError'>
        {containsUpperCase ? (
          <i className='fas fa-check-circle'> </i>
        ) : (
          <i className='fas fa-times-circle'> </i>
        )}
        Password must contain one or more Uppercase character
      </span>
      <span className='pwrdError'>
        {containsLowerCase ? (
          <i className='fas fa-check-circle'> </i>
        ) : (
          <i className='fas fa-times-circle'> </i>
        )}
        Password must contain one or more lowercase character
      </span>
      <span className='pwrdError'>
        {containsSpecialXter ? (
          <i className='fas fa-check-circle'> </i>
        ) : (
          <i className='fas fa-times-circle'> </i>
        )}
        Password must contain one or more of: @, . + $ = * () {}_ - \/
      </span>
      <span className='pwrdError'>
        {meetsLengthReq ? (
          <i className='fas fa-check-circle'> </i>
        ) : (
          <i className='fas fa-times-circle'> </i>
        )}
        Password must have at least six(6) characters
      </span>
    </div>
  );
};

PasswordError.propTypes = {
  passwordError: PropTypes.object.isRequired,
};

export default PasswordError;
