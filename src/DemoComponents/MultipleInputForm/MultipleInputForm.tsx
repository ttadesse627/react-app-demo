import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

interface Skills {
  html: boolean;
  css: boolean;
  javascript: boolean;
}

interface Touched {
  firstName: boolean;
  lastName: boolean;
}

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
];

const selectOptions = options.map(({ value, label }) => (
  <option key={value} value={value}>
    {label}
  </option>
));

const MultipleInputForm: React.FC = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    if (type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      setState({
        ...state,
        skills: { ...state.skills, [name]: isChecked },
      });
    } else if (type === 'file') {
      setState({ ...state, [name]: (e.target as HTMLInputElement).files?.[0] || '' });
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setState({ ...state, touched: { ...state.touched, [name]: true } });
  };

  const validate = () => {
    const errors = {
      firstName: '',
    };

    if (
      (state.touched.firstName && state.firstName.length < 3) ||
      (state.touched.firstName && state.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = state;

    const formattedSkills = Object.keys(skills).filter((key) => skills[key as keyof typeof skills]).map(key => key.toUpperCase());

    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
    };

    console.log(data);
  };

  const { firstName } = validate();

  return (
    <div className='App'>
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit} noValidate>
        <InputField 
            id='firstName'
            type='text'
            label='First Name'
            placeHolder='First Name'
            value={firstName}
            onChange={handleChange}
        />
        <Button
            id='submitButton'
            text='Add'
            type='submit'   
        />
      </form>
    </div>
  );
};

  export default MultipleInputForm;