import React from "react";
import { Link } from "react-router-dom";

const LeftSideLink = ({ subject }) => {
  const { _id, name } = subject;
  return (
    <div>
      <li>
        <Link to={`/subjects/${_id}`}>{name}</Link>
      </li>
    </div>
  );
};

export default LeftSideLink;
