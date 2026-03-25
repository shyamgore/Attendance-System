import React, { useEffect, useState } from "react";
import Hero from "./Dash_Section/Hero.jsx";
import Profile_Photo from "../../assets/Profile_Photo.jpg";
import "./DashBoard.css";
import CalendarApp from "./Dash_Section/CalendarApp";

const DashBoard = () => {
  const [attendanceData, setAttendanceData] = useState({
    attended: 0,
    total: 0,
  });

  const [currentLecture, setCurrentLecture] = useState({
    subject: "",
    professor: "",
  });

  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchAttendanceData();
    fetchCurrentLecture();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await fetch("http://localhost:8080/attendance");
      const data = await response.json();

      const studentAttendance = data.filter(
        (item) => item.roll === storedUser?.identifier
      );

      const attendedCount = studentAttendance.filter(
        (item) => item.status === "Present"
      ).length;

      setAttendanceData({
        attended: attendedCount,
        total: studentAttendance.length,
      });
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  const fetchCurrentLecture = async () => {
    try {
      const response = await fetch("http://localhost:8080/timetable/today");
      const data = await response.json();

      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);

      const currentLecture = data.find((lecture) => {
        return currentTime >= lecture.startTime && currentTime <= lecture.endTime;
      });

      if (currentLecture) {
        setCurrentLecture({
          subject: currentLecture.subject,
          professor: currentLecture.teacherName,
        });
      } else {
        setCurrentLecture({
          subject: "",
          professor: "",
        });
      }
    } catch (error) {
      console.error("Error fetching current lecture:", error);
    }
  };

  return (
    <>
      <div className="Contanier">
        <Hero
          Profile_Photo={Profile_Photo}
          total={attendanceData.total}
          Attended={attendanceData.attended}
          Name={storedUser?.name || "Student"}
          Roll={storedUser?.identifier || "N/A"}
          currentProfessor={currentLecture.professor}
          currentSubject={currentLecture.subject}
        />
      </div>

      <div className="p-7">
        <CalendarApp
          Location="1"
          UserName={storedUser?.name || "Student"}
          Subject={currentLecture.subject || "Unknown"}
          Roll={storedUser?.identifier || "N/A"}
        />
      </div>
    </>
  );
};

export default DashBoard;