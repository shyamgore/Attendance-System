const Hero = (props) => {
  const percentage = props.total > 0 ? (props.Attended / props.total) * 100 : 0;

  let Remark = "";
  let Reaction = "";

  if (percentage >= 75) {
    Remark = "Good";
    Reaction = "🙂";
  } else if (percentage >= 50) {
    Remark = "Do Lectures";
    Reaction = "😐";
  } else {
    Remark = "Need Improvement";
    Reaction = "🤯";
  }

  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log("Subject",props.currentSubject);
  console.log("Teacher",props.currentProfessor);
  
  return (
    <div className="Container">
      <h1 className="font-bold text-7xl p-8 text-[#E85A4F]">
        {props.currentSubject && props.currentProfessor
          ? `${props.currentSubject} by ${props.currentProfessor}`
          : "No Current Lecture"}
      </h1>

      <div className="flex place-content-between px-8 py-4 text-gray-300">
        <div
          className="Presonal_ditails relative rounded-3xl h-50 w-70 text-1xl font-bold bg-gray-700"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${props.Profile_Photo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="p-5 text-3xl">Hello, {storedUser?.name || props.Name}</h1>
          <p className="py-1 px-5">Roll No. {storedUser?.identifier || props.Roll}</p>
        </div>

        <div className="relative h-50 w-70 bg-gray-700 rounded-3xl font-bold">
          <h1 className="font-bold text-2xl p-5">Overall Attendance</h1>
          <h3 className="absolute bottom-0 p-5">
            {props.Attended}/{props.total}
          </h3>
        </div>

        <div className="h-50 w-70 bg-gray-700 rounded-3xl font-bold">
          <h1 className="font-bold text-2xl p-5">Overall Attendance%</h1>
          <h3 className="py-18 p-5">{percentage.toFixed(2)}%</h3>
        </div>

        <div className="h-50 w-70 bg-gray-700 rounded-3xl font-bold relative">
          <h1 className="font-bold text-2xl p-5">{Remark}</h1>
          <h1 className="absolute py-17 p-5 text-[30px]">{Reaction}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;