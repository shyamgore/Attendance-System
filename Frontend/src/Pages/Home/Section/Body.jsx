import "./Style/Body.css";

const Body = ({ Table, lectures, role }) => {
  return (
    <div className="body">
      <div className="Headings">
        <h1>{Table}</h1>
      </div>

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th><h1>Time</h1></th>
              <th><h1>Subject</h1></th>
              <th><h1>Professor</h1></th>
              <th><h1>Lecture Hall</h1></th>
              <th><h1>Note</h1></th>
            </tr>
          </thead>

          <tbody>
            {lectures && lectures.length > 0 ? (
              lectures.map((lecture) => (
                <tr key={lecture.id}>
                  <td>{lecture.startTime} - {lecture.endTime}</td>
                  <td>{lecture.subject}</td>
                  <td>{lecture.teacherName}</td>
                  <td>{lecture.lectureHall}</td>
                  <td>{lecture.note || "None"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No lectures available today</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Body;