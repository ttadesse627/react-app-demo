import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/grid-style.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { UUID } from "crypto";
import ToastNotification from "../../Common/ToastNotification";
import { api_url } from "../../../Environment";
import ILookupData from "../../Interfaces/ILookupData";
import "../../../assets/font-awesome-4.7.0/css/font-awesome.min.css";

const LookupList: React.FC<ILookupData> = () => {
  const api_controller = `${api_url}/lookup`;
  const [data, setData] = useState<ILookupData["lookupProps"]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let rows: React.JSX.Element[] = [];

  useEffect(() => {
    handleGetList();
  }, []);

  if (data !== undefined) {
    if (data.length > 0) {
      const properties = Object.keys(data[0]); // Get property names from the first item
      rows = data.map((lookup, index) => (
        <tr key={`${lookup.id}-${index}`} className="table-row">
          {properties.map((property, index) => (
            <td key={index} className="row-data">
              {lookup[property as keyof typeof lookup]}
            </td>
          ))}
          <td className="row-data grid-btn-container">
            <button
              type="button"
              title="Delete"
              onClick={() => handleDelete(lookup.id)}
            >
              <img
                src="src/assets/images/icons/seo-social-web-network-internet_262_icon-icons.com_61518.png"
                alt="Delete"
                style={{ width: 30, height: 30 }}
              />
            </button>
            <button
              type="button"
              title="View"
              onClick={() => ToastNotification.SuccessNotification(lookup.id)}
            >
              <img
                src="src/assets/images/icons/view-1.png"
                alt="view detail"
                style={{ width: 30, height: 30 }}
              />
            </button>
            <button
              type="button"
              title="Edit"
              onClick={() => handleEdit(lookup)}
            >
              <img
                src="src\assets\images\icons\1814074_draw_edit_pencile_write_icon.png"
                alt="Edit"
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
      setLoading(false);
    } catch (error) {
      setLoading(false);
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

  const handleEdit = async (lookup: any) => {
    navigate(`edit/${lookup.id}`, { state: { lookupData: lookup } });
  };

  return (
    <div className="grid-container">
      <Link to="add-new">Add New</Link>
      {loading ? (
        <div>
          <p>Loading</p>
          <i className="fa fa-spinner fa-spin" style={{ fontSize: 24 }}></i>
        </div>
      ) : rows.length > 0 ? (
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
