import React from "react";

const Blog = () => {
  return (
    <div className="w-75">
      <h1>Question Page</h1>
      <div>
        <div className="mb-3 p-2" style={{ border: "1px solid black" }}>
          <h1>what is cors?</h1>
          <p>
            CORS stands for Cross-Origin Resource Sharing. It allows us to relax
            the security applied to an API. This is done by bypassing the
            Access-Control-Allow-Origin headers, which specify which origins can
            access the API.
          </p>
        </div>
        <div className="mb-3 p-2" style={{ border: "1px solid black" }}>
          <h1>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
          </p>
        </div>
        <div className="mb-3 p-2" style={{ border: "1px solid black" }}>
          <h1>How does the private route work?</h1>
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            .
          </p>
        </div>
        <div className="mb-3 p-2" style={{ border: "1px solid black" }}>
          <h1>What is Node? How does Node work?</h1>
          <p>
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
