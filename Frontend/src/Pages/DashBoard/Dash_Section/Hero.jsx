import React from "react";

const Hero = (props) => {
  let Remark = "";
  let Reaction = "";
  if ((props.Attended / props.total) * 100 >= 75) {
    Remark = "Good";
    Reaction = "🙂";
  } else if (
    (props.Attended / props.total) * 100 <= 75 &&
    (props.Attended / props.total) * 100 >= 50
  ) {
    Remark = "Do Lectures";
    Reaction = "😐";
  } else {
    Remark = "Are you mad?";
    Reaction = "🤯";
  }

  return (
    <>
      <div className="Container">
        <h1 className="font-bold text-7xl p-8 text-[#E85A4F]">
          {props.Subject} by {props.Professor}
        </h1>
        <div className="flex place-content-between px-8 py-4 text-gray-300">
          <div
            className="Presonal_ditails relative rounded-3xl h-50 w-70 text-1xl font-bold bg-gray-700 "
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${props.Profile_Photo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="p-5 text-3xl">Hello, {props.Name}</h1>
            <p className="py-18 px-5">Roll. No {props.Roll}</p>
          </div>

          <div className="relative h-50 w-70 bg-gray-700 rounded-3xl font-bold">
            <h1 className="font-bold text-2xl p-5">Overall Attendance</h1>
            <h3 className="absolute bottom-0 p-5">
              {props.Attended}/{props.total}
            </h3>
          </div>

          <div className="h-50 w-70 bg-gray-700 rounded-3xl font-bold">
            <h1 className="font-bold text-2xl p-5">Overall Attendance%</h1>
            <h3 className=" py-18 p-5">
              {(props.Attended / props.total) * 100}%
            </h3>
          </div>

          <div className="h-50 w-70 bg-gray-700 rounded-3xl font-bold">
            <h1 className="font-bold text-2xl p-5">{Remark}</h1>
            <h1 className="absolute py-17 p-5 text-[30px]">{Reaction}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
