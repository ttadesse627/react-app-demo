import React, { useRef } from 'react';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

const UncontrolledComponent: React.FC = () => {
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const itemsList = Array<JSX.Element>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(firstNameRef.current && lastNameRef.current) {
      itemsList(<li>{firstNameRef.current.value+" "+lastNameRef.current.value}</li>);
      firstNameRef.current.value = ''
      lastNameRef.current.value = ''
    }
  }
  console.log(itemsList)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <InputField 
            id='firstName'
            type='text'
            label='First Name'
            inputRef={firstNameRef}
            name='firstName'
            placeHolder='First Name'
            value={firstNameRef.current?.value}
          />
          <InputField 
            id='lastName'
            type='text'
            label='Last Name'
            inputRef={lastNameRef}
            name='lastName'
            placeHolder='Last Name'
            value={lastNameRef.current?.value}
          />
        </div>
        <Button 
          id='submitButton'
          type='submit'
          text='Add'
        />
      </form>
      <div>
        <ol>
          {itemsList}
        </ol>
      </div>
    </div>
  );
};

export default UncontrolledComponent;