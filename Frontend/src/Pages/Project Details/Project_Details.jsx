import React from 'react'
import "./Project-Details.css"

const Project_Datails = () => {
  return (
    <>
     <div className="project-wrapper">

      <h1 className="project-title">
        Smart Attendance System
      </h1>

      <div className="gridp">

        <div className="card big">
          <h2>Abstract</h2>
          <p>
            Smart attendance system using location and time verification to
            automate attendance and prevent proxy entries.
          </p>
        </div>

      
        <div className="card">
          <h2>Technologies</h2>
          <p>React, Tailwind, Java, MySQL</p>
        </div>

        <div className="card">
          <h2>Features</h2>
          <ul>
            <li>Location-based attendance</li>
            <li>Real-time tracking</li>
            <li>Dashboard stats</li>
            <li>Calendar view</li>
          </ul>
        </div>

        <div className="card">
          <h2>Workflow</h2>
          <ol>
            <li>Login</li>
            <li>Check lecture</li>
            <li>Verify location</li>
            <li>Mark attendance</li>
          </ol>
        </div>

        <div className="card full">
          <h2>Modules</h2>
          <p>Login, Dashboard, Attendance, Calendar, Lecture Management</p>
        </div>

        <div className="card full">
          <h2>Future Scope</h2>
          <p></p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Project_Datails
