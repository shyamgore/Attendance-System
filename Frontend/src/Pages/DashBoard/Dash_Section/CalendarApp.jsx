import React, { useState } from "react";
import "./Style/CalenderApp.css";
import Button from "../../../Micro_Compo/Button";

const CalendarApp = (Props) => {
  const date = new Date();
  const [Month, setMonth] = useState(date.getMonth());
  const [Year, setYear] = useState(date.getFullYear());

  const M_StartDay = new Date(Year, Month, 1).getDay();
  const M_EndDay = new Date(Year, Month + 1, 0).getDate();
  const Today = date.getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function NextMonth() {
    if (Month === 11) {
      setMonth(0);
      setYear(Year + 1);
    } else {
      setMonth(Month + 1);
    }
  }

  function PrevMonth() {
    if (Month === 0) {
      setMonth(11);
      setYear(Year - 1);
    } else {
      setMonth(Month - 1);
    }
  }

  async function CheckAttendance() {
    const attendanceData = {
      studentName: Props.UserName,
      subject: Props.Subject,
      date: new Date().toISOString().split("T")[0],
      status: "Present",
      roll: Props.Roll,
    };

    try {
      const response = await fetch("http://localhost:8080/attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attendanceData),
      });

      const result = await response.text();

      if (response.ok) {
        alert("Attendance marked successfully");
      } else {
        alert(result);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to backend");
    }
  }

  return (
    <>
      <div className="Container flex justify-center items-center p-7">
        <div className="rounded-2xl p-4">
          <div className="Navgation-Container">
            <div className="Navigation flex justify-center items-center rounded-t-2xl gap-x-50 p-3 font-bold text-xl bg-[#D8C3A5]">
              <div onClick={PrevMonth}>
                <Button Name={"🡄"} />
              </div>

              <h1>
                {months[Month]}-{Year}
              </h1>

              <div onClick={NextMonth}>
                <Button Name={"🡆"} />
              </div>
            </div>
          </div>

          <div className="Days-Container">
            <div className="calender flex justify-center border-b-2 border-[#3838386d] gap-2 p-4">
              {days.map((day) => (
                <span
                  className="text-xl font-bold text-[#383838bd] h-15 w-25 flex justify-center items-center"
                  key={day}
                >
                  {day}
                </span>
              ))}
            </div>

            <div className="DatesInMonth grid grid-cols-7 border-b-2 border-[#3838386d] gap-2 p-4 divide-y divide-[#3838386d]">
              {[...Array(M_StartDay).keys()].map((_, index) => {
                return <span key={`empty-${index}`} />;
              })}

              {[...Array(M_EndDay).keys()].map((day) => {
                const isToday = Today - 1 === day;

                return (
                  <span
                    key={day + 1}
                    className={`flex items-center justify-center h-15 w-25 rounded-lg hover:bg-[#E98074] ${
                      isToday
                        ? "bg-[#E85A4F] text-white font-bold rounded-lg"
                        : ""
                    }`}
                  >
                    {day + 1}
                  </span>
                );
              })}
            </div>

            <div className="text-xl font-bold flex justify-center p-4 text-[#383838bd]">
              <h1>Hi {Props.UserName}, Mark Your Attendance</h1>
            </div>
          </div>

          <div className="Calender-Bottom">
            <div className="flex justify-end rounded-b-2xl gap-x-5 p-4 font-bold text-xl bg-[#D8C3A5]">
              <div onClick={CheckAttendance}>
                <Button Name="Mark Attendance" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarApp;