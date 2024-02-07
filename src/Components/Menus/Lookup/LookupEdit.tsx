import React, { useState } from "react";
import InputField from "../../Common/InputField/InputField";
import Button from "../../Common/Button/Button";
import "../../../styles/form-style.css";
import { api_url } from "../../../Environment";
import axios from "axios";
import ToastNotification from "../../Common/ToastNotification";
import { ToastContainer } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LookupEdit: React.FC = (props) => {
  const API_Endpoint = `${api_url}/lookup`;
  const stateParamValue = useLocation().state.lookupData;

  const [id, setId] = useState(stateParamValue.id);
  const [category, setCategory] = useState(stateParamValue.category);
  const [value, setValue] = useState(stateParamValue.value);

  const navigate = useNavigate();

  let changeCategoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  let changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${API_Endpoint}/edit/${id}`, {
        id,
        category,
        value,
      });

      if (response.status === 200) {
        ToastNotification.SuccessNotification("" + response.statusText);
        setTimeout(() => navigate("/lookups"), 1000);
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
      <h1>Lookup Edit Form</h1>
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

export default LookupEdit;
