import "./Style/Body.css"
const Body = (Props) => {

  return (
    <>
      <div className="body">
        <div className="Headings">
          <h1>{Props.Table}</h1>
        </div>
        <div className="tableContainer">
          <table>
        
            <thead>
              <th><h1>Time</h1></th>
              <th><h1>Subject</h1></th>
              <th><h1>Professor</h1></th>
              <th><h1>Lecture Hall</h1></th>
              <th><h1>Note</h1></th>
            </thead>
             <tbody>
            <tr>
              <th>2:30</th>
              <th>Java</th>
              <th>Ahire Mam</th>
              <th>SF-35</th>
              <th>None</th>
            </tr>
            <tr>
              <th>2:30</th>
              <th>Java</th>
              <th>Ahire Mam</th>
              <th>SF-35</th>
              <th>None</th>
            </tr>
            <tr>
              <th>2:30</th>
              <th>Java</th>
              <th>Ahire Mam</th>
              <th>SF-35</th>
              <th>None</th>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Body;
