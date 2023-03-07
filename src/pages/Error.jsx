import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid h-screen px-4 bg-secondary place-content-center">
      <div className="text-center">
        <img src="/images/404.gif" alt="404 error" />

        <Link
          to="/"
          className="inline-block px-5 py-3 mt-10 text-sm font-medium text-white bg-primary rounded hover:bg-primary focus:outline-none focus:ring"
        >
          Go Back Home 😿
        </Link>
      </div>
    </div>
  );
};

export default Error;
