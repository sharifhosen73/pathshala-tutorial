import React from "react";
import { Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import SingleSubject from "../SingleSubject/SingleSubject";
import "./Home.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Home = () => {
  const subjects = useLoaderData();

  return (
    <div>
      <div className="heading">
        <h1>Running Courses</h1>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <Button
              className=" heading-button"
              variant="outline-dark"
              onClick={toPdf}
            >
              Download
            </Button>
          )}
        </Pdf>
        <div ref={ref} className="pdf-text">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
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
