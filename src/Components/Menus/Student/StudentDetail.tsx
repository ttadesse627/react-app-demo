import { Link } from "react-router-dom";

function StudentDetail(modalClass: string) {
  return (
    <div id="studentInfoModal" className={modalClass}>
      <Link to="/students/">Back</Link>
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default StudentDetail;
