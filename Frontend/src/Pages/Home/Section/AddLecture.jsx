import React, { useState } from "react";
import "./style/AddLecture.css";
import { useNavigate } from "react-router-dom";

const AddLecture = () => {
  const [subject, setSubject] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [lectureHall, setLectureHall] = useState("");
  const [day, setDay] = useState("MONDAY");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleAddLecture = async (e) => {
    e.preventDefault();

    if (!user || user.role !== "teacher") {
      setMessage("Only teachers can add lectures");
      return;
    }

    if (
      !subject.trim() ||
      !teacherName.trim() ||
      !lectureHall.trim() ||
      !day.trim() ||
      !startTime.trim() ||
      !endTime.trim()
    ) {
      setMessage("Please fill in all required fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/timetable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          teacherName,
          lectureHall,
          day,
          startTime,
          endTime,
          note,
        }),
      });

      if (response.ok) {
        setMessage("Lecture added successfully");
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        setMessage("Failed to add lecture");
      }
    } catch (error) {
      console.error("Add lecture error:", error);
      setMessage("Server error. Backend may not be running.");
    }
  };

  return (
    <div className="addLecture_main">
      <div className="addLecture_container">
        <h1>Add Lecture</h1>
        <p>Create a new lecture for the timetable</p>

        <form onSubmit={handleAddLecture}>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Teacher Name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Lecture Hall"
            value={lectureHall}
            onChange={(e) => setLectureHall(e.target.value)}
            required
          />

          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="MONDAY">Monday</option>
            <option value="TUESDAY">Tuesday</option>
            <option value="WEDNESDAY">Wednesday</option>
            <option value="THURSDAY">Thursday</option>
            <option value="FRIDAY">Friday</option>
            <option value="SATURDAY">Saturday</option>
            <option value="SUNDAY">Sunday</option>
          </select>

          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />

          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <button type="submit">Add Lecture</button>

          {message && <p className="addLecture_message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddLecture;