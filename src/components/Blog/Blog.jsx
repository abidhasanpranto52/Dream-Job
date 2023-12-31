import React from "react";

const Blog = () => {
  return (
    <div className="my-container space-y-2 py-10 p-3 bg-indigo-50">
      <h1 className="text-3xl  font-semibold text-blue-700">
        1. What is context Api?
      </h1>
      <p className="text-gray-600">
        <span className="font-bold">Ans</span>: The Context API is a React structure that enables you to exchange
        unique details and assists in solving prop-drilling from all levels of
        your application
      </p>
      <h1 className="text-3xl  font-semibold text-blue-700">
        2. What is Custom Hook?
      </h1>
      <p className="text-gray-600">
        <span className="font-bold">Ans</span>: A custom hook is a special JavaScript function whose name starts
        with 'use' and can be used to call other hooks{" "}
      </p>
      <h1 className="text-3xl  font-semibold text-blue-700">
        3.What is useRef?
        </h1>
      <p className="text-gray-600">
        <span className="font-bold">Ans</span>: The useRef Hook allows you to persist values between renders. It
        can be used to store a mutable value that does not cause a re-render
        when updated
      </p>
      <h1 className="text-3xl  font-semibold text-blue-700">
        4. What is useMemo?
        </h1>
      <p className="text-gray-600">
        <span className="font-bold">Ans</span>: useMemo is a React Hook that lets you cache the result of a
        calculation between re-renders
      </p>
    </div>
  );
};

export default Blog;
