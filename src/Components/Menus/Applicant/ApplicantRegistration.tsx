import React, { useState } from "react";
import InputField from "../../Common/InputField/InputField";
import Button from "../../Common/Button/Button";
import "../../../styles/form-style.css";
import { api_url } from "../../../Environment";

const ApplicantRegistration: React.FC = () => {
  const API_Endpoint = api_url;

  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [numberOfSemesters, setNumberOfSemesters] = useState(0);
  const [currentSemester, setCurrentSemester] = useState(0);

  let changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  let changeShortNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShortName(e.target.value);
  };
  let changeNumberOfSemestersHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumberOfSemesters(e.target.valueAsNumber);
  };

  let changeCurrentSemesterHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentSemester(e.target.valueAsNumber);
  };

  let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(API_Endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          shortName,
          numberOfSemesters,
          currentSemester,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        // Handle successful response as needed
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

  return (
    <div className="container">
      <h1>Department Registration Form</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <InputField
            id="name"
            type="text"
            name="Name"
            label="Department Name"
            value={name}
            onChange={changeNameHandler}
          />
          <InputField
            id="shortName"
            type="text"
            name="shortName"
            label="Short Name"
            value={shortName}
            onChange={changeShortNameHandler}
          />
          <InputField
            id="numberOfSemesters"
            type="number"
            name="numberOfSemesters"
            label="Number of Semesters"
            value={numberOfSemesters}
            onChange={changeNumberOfSemestersHandler}
          />
          <InputField
            id="currentSemester"
            type="number"
            name="currentSemester"
            label="Current Semester"
            value={currentSemester}
            onChange={changeCurrentSemesterHandler}
          />
        </div>
        <Button id="submitButton" type="submit" text="Submit" />
      </form>
    </div>
  );
};

export default ApplicantRegistration;
