import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/grid-style.css";
import "../../../styles/modal-style.css";
import axios from "axios";
import StudentData from "./IStudentData";
import IStudentData from "./IStudentData";

const StudentsList: React.FC<StudentData> = ({ value }) => {
  const API_Endpoint = "http://localhost:5000/Student";

  const [data, setData] = useState<IStudentData["value"]>([]);
  let rows: React.JSX.Element[] = [];

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    var response = await axios.get(API_Endpoint);
    setData(response.data.value);
  };

  const handleDelete = async (id: string) => {
    try {
      var response = await axios.delete(`${API_Endpoint}/Delete/${id}`);
      if (response.status == 200) {
        alert(response.status + ": Successfully delete the student!");
        handleGetList();
      }
    } catch (error) {
      alert(error);
    }
  };

  if (data.length > 0) {
    rows = data.map((stud, index) => (
      <tr key={`${stud.id}-${index}`} className="table-row">
        <td className="row-data">{stud.firstName}</td>
        <td className="row-data">{stud.middleName}</td>
        <td className="row-data">{stud.lastName}</td>
        <td className="row-data">{stud.birthDate}</td>
        <td className="row-data">
          <button
            type="button"
            title="Delete"
            onClick={() => handleDelete(stud.id)}
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
            onClick={() => alert("Student with an id: " + stud.id)}
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

  return (
    <div className="grid-container">
      <Link to="/students/add-new">Add</Link>
      {rows.length > 0 ? (
        <table className="grid-table">
          <thead className="table-head">
            <tr className="table-head-row">
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Birth Date</th>
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

export default StudentsList;
