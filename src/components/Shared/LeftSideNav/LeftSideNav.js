import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../../context/AuthProvider";

const LeftSideNav = () => {
  const { providerLogin, githubLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

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
      <Button onClick={handleGoogle} className="my-3" variant="info">
        Sign In With Google
      </Button>
      <br />
      <Button onClick={handleGithub} variant="info">
        Sign In WIth Github
      </Button>
    </div>
  );
};

export default LeftSideNav;
