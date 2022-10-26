import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleSubject from "../SingleSubject/SingleSubject";
import "./Home.css";

const Home = () => {
  const subjects = useLoaderData();
  // console.log(subjects);
  return (
    <div>
      <h1>Running Courses</h1>
      <div className="subjects">
        {subjects.map((subject) => (
          <SingleSubject key={subjects._id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default Home;
