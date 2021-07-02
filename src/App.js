import Form from './components/Form';
import { useFormik } from 'formik';
import { useState } from 'react';
import './App.css';

function App() {
  const [passwordValidation, setPasswordValidation] = useState({
    containsDigit: false,
    containsUpperCase: false,
    containsLowerCase: false,
    containsSpecialXter: false,
    meetsLengthReq: false,
  });
  const MIN_PASSWORD_LENGTH = 6;
  const formik = useFormik({
    initialValues: {
      txtFName: '',
      txtLName: '',
      txtEmail: '',
      txtPassword: '',
      txtPasswordAgain: '',
    },

    onSubmit: (values) => {
      alert(
        'Thank you for viewing my form validation with react and formik project!'
      );
    },
    validate: (values) => {
      let errors = {};

      if (!values.txtFName) {
        errors.txtFName = 'Field required';
      } else {
        if (!/[a-zA-Z]{2,}/.test(values.txtFName)) {
          errors.txtFName = 'Enter a valid name';
        }
      }

      if (!values.txtLName) {
        errors.txtLName = 'Field required';
      } else {
        if (!/[a-zA-Z]{2,}/.test(values.txtLName)) {
          errors.txtLName = 'Enter a valid name';
        }
      }

      if (!values.txtEmail) {
        errors.txtEmail = 'Field Required';
      } else {
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.txtEmail)
        ) {
          errors.txtEmail = 'Invalid email address';
        }
      }

      if (!values.txtPassword) {
        errors.txtPassword = 'Field Required';
      } else {
        passwordValidation.containsDigit = /\d+/.test(values.txtPassword)
          ? true
          : false;

        passwordValidation.containsUpperCase = /[A-Z]+/.test(values.txtPassword)
          ? true
          : false;

        passwordValidation.containsLowerCase = /[a-z]+/.test(values.txtPassword)
          ? true
          : false;

        passwordValidation.containsSpecialXter = /[@.+=$*\\/)(}{_-]+/.test(
          values.txtPassword
        )
          ? true
          : false;

        passwordValidation.meetsLengthReq =
          values.txtPassword.length >= MIN_PASSWORD_LENGTH ? true : false;

        setPasswordValidation(passwordValidation);
      }

      if (!values.txtPasswordAgain) {
        errors.txtPasswordAgain = 'Field Required';
      } else {
        if (values.txtPassword !== values.txtPasswordAgain) {
          errors.txtPasswordAgain = 'Passwords must match';
        }
      }
      return errors;
    },
  });

  const fields = [
    {
      type: 'text',
      name: 'txtFName',
      label: 'First Name',
    },
    {
      type: 'text',
      name: 'txtLName',
      label: 'Last Name',
    },
    {
      type: 'email',
      name: 'txtEmail',
      label: 'Email',
    },
    {
      type: 'password',
      name: 'txtPassword',
      label: 'Password',
    },
    {
      type: 'password',
      name: 'txtPasswordAgain',
      label: 'Password Again',
    },
  ];

  return (
    <div className='App'>
      <div className='container'>
        <Form
          fields={fields}
          onChangeHandler={formik.handleChange}
          onSubmitHandler={formik.handleSubmit}
          values={formik.values}
          errors={formik.errors}
          passwordError={passwordValidation}
        />
      </div>
    </div>
  );
}

export default App;
