import React, { useState } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import "../../../styles/student-registration.css";
import axios from "axios";

const StudentRegistration: React.FC = () => {
  const API_Endpoint = "http://localhost:5000/Student";

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date("1999-10-18T17:35"));

  let changeFirstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  let changeMiddleNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMiddleName(e.target.value);
  };
  let changeLastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  let changeBirthDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(new Date(e.target.value));
  };

  let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_Endpoint, {
        studentRequestDto: {
          firstName,
          middleName,
          lastName,
          birthDate: birthDate.toISOString(),
        },
      });

      if (response.data.value.success === true) {
        console.log(
          `${response.status.valueOf}: ${response.statusText}- ${response.data.value.message}`
        );

        resetForm();
      } else {
        // Handle error response
        alert(
          "Failed to submit form:\n " +
            response.status +
            " \n" +
            response.statusText
        );
      }
    } catch (error) {
      alert("Error while submitting form:" + error);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setBirthDate(new Date("1999-10-18T17:35"));
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <InputField
            id="firstName"
            type="text"
            name="firstName"
            label="First Name"
            value={firstName}
            onChange={changeFirstNameHandler}
            required={true}
          />
          <InputField
            id="middleName"
            type="text"
            name="middleName"
            label="Middle Name"
            value={middleName}
            onChange={changeMiddleNameHandler}
            required={true}
          />
          <InputField
            id="lastName"
            type="text"
            name="lastName"
            label="Last Name"
            value={lastName}
            onChange={changeLastNameHandler}
          />
          <InputField
            id="birthDate"
            type="datetime-local"
            name="birthDate"
            label="Birth Date"
            value={birthDate.toISOString().slice(0, 16)}
            onChange={changeBirthDateHandler}
          />
        </div>
        <Button id="submitButton" type="submit" text="Submit" />
      </form>
    </div>
  );
};

export default StudentRegistration;
