import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const SubjectDetails = () => {
  const subject = useLoaderData();
  const { _id } = subject;
  console.log(subject);
  return (
    <Card className="subject-card w-75 mx-auto my-5">
      <Card.Img className="subject-img" variant="top" src={subject.img} />
      <Card.Body>
        <Card.Title>{subject.name}</Card.Title>
        <Card.Text>{subject.description}</Card.Text>
      </Card.Body>
      <div className="button">
        <Link className="ms-3" to="/">
          Go To Home Page
        </Link>
        <Link to={`/premium-subject/${_id}`}>
          <Button className="subject-button" variant="primary">
            Premium
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default SubjectDetails;
