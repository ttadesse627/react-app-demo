import React, { useState } from "react";
import InputField from "../../Common/InputField/InputField";
import Button from "../../Common/Button/Button";
import "../../../styles/form-style.css";
import { api_url } from "../../../Environment";
import axios from "axios";
import ToastNotification from "../../Common/ToastNotification";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const LookupRegistration: React.FC = (props) => {
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
        setCategory("");
        setValue("");
        ToastNotification.SuccessNotification("" + response.statusText);
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
      <Link to="/lookups">Back</Link>
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
      <ToastContainer />
    </div>
  );
};

export default LookupRegistration;
