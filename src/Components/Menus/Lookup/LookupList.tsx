import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/grid-style.css";
import IApplicantData from "../../Interfaces/ILookupData";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { UUID } from "crypto";
import ToastNotification from "../../Common/ToastNotification";
import { api_url } from "../../../Environment";
import ILookupData from "../../Interfaces/ILookupData";

const LookupList: React.FC<IApplicantData> = () => {
  const api_controller = `${api_url}/lookup`;
  const [data, setData] = useState<ILookupData["lookupProps"]>([]);
  let rows: React.JSX.Element[] = [];

  useEffect(() => {
    handleGetList();
  }, []);

  if (data !== undefined) {
    if (data.length > 0) {
      rows = data.map((lookup, index) => (
        <tr key={`${lookup.id}-${index}`} className="table-row">
          <td className="row-data">{lookup.id}</td>
          <td className="row-data">{lookup.category}</td>
          <td className="row-data">{lookup.value}</td>
          <td className="row-data">
            <button
              type="button"
              title="Delete"
              onClick={() => handleDelete(lookup.id)}
            >
              <img
                src="src\assets\images\icons\seo-social-web-network-internet_262_icon-icons.com_61518.png"
                alt="delete"
                style={{ width: 30, height: 30 }}
              />
            </button>
            <button
              type="button"
              title="View"
              onClick={() => ToastNotification.SuccessNotification(lookup.id)}
            >
              <img
                src="src\assets\images\icons\view-1.png"
                alt="view detail"
                style={{ width: 30, height: 30 }}
              />
            </button>
          </td>
        </tr>
      ));
    }
  }

  const handleGetList = async () => {
    var response = null;
    try {
      response = await axios.get(`${api_controller}/get-all-lookup`);
      setData(response.data.items);
    } catch (error) {
      ToastNotification.ErrorNotification("" + error);
    }
  };

  const handleDelete = async (id: UUID) => {
    var response = null;
    try {
      response = await axios.delete(`${api_controller}/delete/${id}`);
      if (response.status === 200) {
        ToastNotification.SuccessNotification(
          response.status + ":" + response.statusText
        );
        handleGetList();
      }
    } catch (error) {
      ToastNotification.ErrorNotification("" + error);
    }
  };

  return (
    <div className="grid-container">
      <Link to="/lookup/add-new">Add</Link>
      {rows.length > 0 ? (
        <table className="grid-table">
          <thead className="table-head">
            <tr className="table-head-row">
              <th>Id</th>
              <th>Category</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      ) : (
        <p>No data found!</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default LookupList;
