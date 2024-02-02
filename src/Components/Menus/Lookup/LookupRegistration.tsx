import React, { useState } from "react";
import InputField from "../../Common/InputField/InputField";
import Button from "../../Common/Button/Button";
import "../../../styles/form-style.css";
import { api_url } from "../../../Environment";
import axios from "axios";
import ToastNotification from "../../Common/ToastNotification";

const LookupRegistration: React.FC = () => {
  const API_Endpoint = `${api_url}/lookup`;

  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

  let changeCategoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  let changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_Endpoint}/create`, {
        category,
        value,
      });

      if (response.status === 200) {
        ToastNotification.SuccessNotification("" + response.statusText);
        const responseData = await response.data();
        console.log(responseData);
        // Handle successful response as needed
      } else {
        // Handle error response
        ToastNotification.ErrorNotification(
          "Failed to submit form:\n " +
            response.status +
            " \n" +
            response.statusText
        );
      }
    } catch (error) {
      ToastNotification.ErrorNotification(
        "Error while submitting form:" + error
      );
    }
  };

  return (
    <div className="container">
      <h1>Lookup Registration Form</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <InputField
            id="category"
            type="text"
            name="category"
            label="Category"
            value={category}
            onChange={changeCategoryHandler}
          />
          <InputField
            id="value"
            type="text"
            name="value"
            label="Value"
            value={value}
            onChange={changeValueHandler}
          />
        </div>
        <Button id="submitButton" type="submit" text="Submit" />
      </form>
    </div>
  );
};

export default LookupRegistration;
