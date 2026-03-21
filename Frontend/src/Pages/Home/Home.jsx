import React, { useEffect, useState } from "react";
import Hero from "./Section/Hero";
import Body from "./Section/Body";

const Home = () => {
  const [todayLectures, setTodayLectures] = useState([]);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [loggedInUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const convertToMinutes = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  };

  const findCurrentLecture = (lectures) => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    for (let lecture of lectures) {
      const startTotal = convertToMinutes(lecture.startTime);
      const endTotal = convertToMinutes(lecture.endTime);

      if (currentMinutes >= startTotal && currentMinutes <= endTotal) {
        return lecture;
      }
    }

    return null;
  };

  const filterUpcomingLectures = (lectures) => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    return lectures.filter((lecture) => {
      const endTotal = convertToMinutes(lecture.endTime);
      return endTotal >= currentMinutes;
    });
  };

  const fetchTodayTimetable = async () => {
    try {
      const response = await fetch("http://localhost:8080/timetable/today");
      const data = await response.json();

      const activeLecture = findCurrentLecture(data);
      const upcomingLectures = filterUpcomingLectures(data);

      setCurrentLecture(activeLecture);
      setTodayLectures(upcomingLectures);
    } catch (error) {
      console.error("Error fetching timetable:", error);
    }
  };

  useEffect(() => {
    fetchTodayTimetable();

    const interval = setInterval(() => {
      fetchTodayTimetable();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Section">
      <div className="h-screen">
        <Hero
          Professor={currentLecture?.teacherName}
          Subject={currentLecture?.subject}
          Hall={currentLecture?.lectureHall}
          userName={loggedInUser?.name}
          role={loggedInUser?.role}
        />
      </div>

      <div className="h-screen">
        <Body
          Table="Upcoming Lectures"
          lectures={todayLectures}
          role={loggedInUser?.role}
        />
      </div>
    </div>
  );
};

export default Home;