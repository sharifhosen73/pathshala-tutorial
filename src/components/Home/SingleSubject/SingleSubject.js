import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./SingleSubject.css";

const SingleSubject = ({ subject }) => {
  const { _id, name, description, img } = subject;
  return (
    <div>
      <Card className="subject-card ">
        <Card.Img className="subject-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description.length > 250 ? (
              <p>
                {description.slice(0, 250) + "..."}
                <Link to={`/subjects/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{subject}</p>
            )}
          </Card.Text>
        </Card.Body>
        <div className="button">
          <Link to={`/subjects/${_id}`}>
            <Button className="subject-button" variant="primary">
              Course Details
            </Button>
          </Link>
          <Link to={`/premium-subject/${_id}`}>
            <Button className="subject-button" variant="primary">
              Premium
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SingleSubject;
