import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid h-screen px-4 bg-secondary place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl dark:text-gray-700">
          404
        </h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          We can't find that page.
        </p>

        <Link
          to="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-primary rounded hover:bg-primary focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
