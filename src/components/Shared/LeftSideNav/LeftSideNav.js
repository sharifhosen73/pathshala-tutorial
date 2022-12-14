import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../../context/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useState } from "react";
import LeftSideLink from "../../Home/LeftSideLink/LeftSideLink";

const LeftSideNav = () => {
  const { providerLogin, githubLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [subjects, setSubjects] = useState([]);

  const { _id } = subjects;

  useEffect(() => {
    fetch("https://pathshala-tutorial-server.vercel.app/subjects")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  const handleGoogle = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithub = () => {
    githubLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>All Courses: {subjects.length}</h1>
      <ul>
        {subjects.map((subject) => (
          <LeftSideLink key={_id} subject={subject} />
        ))}
      </ul>

      <Button onClick={handleGoogle} className="my-3" variant="info">
        <FaGoogle /> Sign In With Google
      </Button>
      <br />
      <Button onClick={handleGithub} variant="info">
        <FaGithub /> Sign In WIth Github
      </Button>
    </div>
  );
};

export default LeftSideNav;
