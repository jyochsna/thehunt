/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Create TeacherManageStudents  */
class TeacherManageStudents extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">MANAGE STUDENTS</h1>
        <h5 className="text-secondary">
          NAVIGATION
        <ul>
            <li><Link to="/teacher">Teacher Dashboard</Link></li>
          </ul>
        </h5>
        <h5 className="text-info">
          TABBED OPTIONS
        <ul>
            <li>Add/Edit Students</li>
            <li>Create Groups</li>
            <li>Student/Group Statistics</li>
          </ul>
        </h5>
        <h5 className="text-info text-center">
      <Link to="/"><img src="./images/back.png" alt="Back icon" width="50px"/>Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );
  }
}

/*  Export TeacherManageStudents  */
export default TeacherManageStudents;