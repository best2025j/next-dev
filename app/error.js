"use client";
import React, { useEffect } from "react";

const GlobalError = () => {
  useEffect(() => {
    console.log(error);
  }, []);

  return (
    <html>
      <body className="text-center mt-10">
        <h1>Something went wrong</h1>
        <button className="hover:text-orange10" onClick={() => reset()}>
          Try Again
        </button>
      </body>
    </html>
  );
};

export default GlobalError;
