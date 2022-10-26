import React from "react";
import { Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import SingleSubject from "../SingleSubject/SingleSubject";
import "./Home.css";

const Home = () => {
  const subjects = useLoaderData();
  // console.log(subjects);
  return (
    <div>
      <div className="d-flex">
        <h1>Running Courses</h1>
        <Button className="ms-3 heading-button" variant="outline-dark">
          Download
        </Button>
      </div>
      <div className="subjects">
        {subjects.map((subject) => (
          <SingleSubject key={subjects._id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default Home;
