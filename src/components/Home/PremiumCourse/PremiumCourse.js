import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const PremiumCourse = () => {
  const subject = useLoaderData();
  return (
    <div>
      <h1 className="mt-5 text-primary  mx-auto">Premium Course</h1>
      <Card className="subject-card w-75 mx-auto mt-3 mb-5">
        <Card.Img className="subject-img" variant="top" src={subject.img} />
        <Card.Body>
          <Card.Title>{subject.name}</Card.Title>
          <Card.Text>{subject.description}</Card.Text>
          <Card.Text className="fw-bold">Life Time Support</Card.Text>
        </Card.Body>
        <div className="button">
          <Link className="ms-3" to="/">
            Go To Home Page
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default PremiumCourse;
