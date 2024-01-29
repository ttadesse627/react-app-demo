import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/grid-style.css";
import IDepartmentData from "./IDepartmentData";
import axios from "axios";

const API_Endpoint = "http://localhost:5000/Department";

const DepartmentList: React.FC<IDepartmentData> = ({ deptProps }) => {
  const [data, setData] = useState<IDepartmentData["deptProps"]>([]);
  let rows: React.JSX.Element[] = [];

  useEffect(() => {
    handleGetList();
  }, []);

  if (data.length > 0) {
    rows = data.map((dept, index) => (
      <tr key={`${dept.id}-${index}`} className="table-row">
        <td className="row-data">{dept.id}</td>
        <td className="row-data">{dept.name}</td>
        <td className="row-data">{dept.shortName}</td>
        <td className="row-data">{dept.numberOfSemisters}</td>
        <td className="row-data">{dept.currentSemister}</td>
        <td className="row-data">{dept.Courses ? dept.Courses.length : 0}</td>
        <td className="row-data">
          <button
            type="button"
            title="Delete"
            onClick={() => handleDelete(dept.id)}
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
            onClick={() => alert("Student with an id: " + dept.id)}
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

  const handleGetList = async () => {
    var response = null;
    try {
      response = await axios.get(API_Endpoint);
      setData(response.data.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async (id: string) => {
    var response = null;
    try {
      response = await axios.delete(`${API_Endpoint}/Delete/${id}}`);
      if (response.status === 200) {
        alert(response.status + ": Successfully deleted the department!");
        handleGetList();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="grid-container">
      <Link to="/departments/add-new">Add</Link>
      {rows.length > 0 ? (
        <table className="grid-table">
          <thead className="table-head">
            <tr className="table-head-row">
              <th>Id</th>
              <th>Name</th>
              <th>Short Name</th>
              <th>Number Of Semester</th>
              <th>Current Semester</th>
              <th>Number Of Courses</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      ) : (
        <p>No data found!</p>
      )}
    </div>
  );
};

export default DepartmentList;
