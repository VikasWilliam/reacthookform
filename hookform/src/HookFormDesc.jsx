import React from "react";
import { Outlet } from "react-router-dom";

export const HookFormDesc = () => {
  return (
    <>
      <h3 style={{ textAlign: "center", color: "blue" }}>
        Welcome to React hook form demo!!
      </h3>
      <div className="container border p-5 my-4 rounded">
        <h2 className="text-center mb-4">React Hook Form Overview</h2>
        <p>
          <strong>React Hook Form</strong> is a lightweight library for handling
          forms in React using hooks. It simplifies form validation, data
          handling, and submission by utilizing hooks like <code>useForm</code>.
          It minimizes re-renders by leveraging uncontrolled components, which
          enhances performance. It also supports schema-based validation using
          libraries like Yup. The library's API is intuitive, making form
          management easier and more efficient in React projects.<br/> We can make
          form in React without react hook-form but it is quite tedious we
          needed to implement things like validation blure out highlight and
          error hence using library is a better choice.<br/><br/><br/>

          Steps to integrate React Hook-Form:
          1)Need to install "react-hook-form" 
        </p>
        <h4 className="mt-4">
          How <code>useForm</code> Works
        </h4>
        <p>
          In React Hook Form, <code>useForm</code> is the primary hook that
          manages form state, validation, and submission. Here's a breakdown of
          how it works:
        </p>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item">
            <strong>Form State Management:</strong> <code>useForm</code>{" "}
            initializes and manages the values of form fields. It provides
            methods like <code>register</code> to connect input fields to the
            form and <code>getValues</code> to retrieve the current form state.
          </li>
          <li className="list-group-item">
            <strong>Validation:</strong> It supports both manual and
            schema-based validation (e.g., with Yup). You can define validation
            rules directly in the <code>register</code> method, and errors are
            tracked in an <code>errors</code> object.
          </li>
          <li className="list-group-item">
            <strong>Submission Handling:</strong> <code>useForm</code> provides
            the <code>handleSubmit</code> method, which collects form data and
            performs validation. If validation passes, a callback function (like{" "}
            <code>onSubmit</code>) is triggered with the form data.
          </li>
          <li className="list-group-item">
            <strong>Minimized Re-renders:</strong> It optimizes performance by
            keeping input fields uncontrolled, reducing unnecessary re-renders
            (unlike traditional controlled forms in React, where each keystroke
            triggers a render).
          </li>
        </ul>
        <h4 className="mt-4">Key API Methods</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <code>register:</code> Connects input fields to the form state.
          </li>
          <li className="list-group-item">
            <code>handleSubmit:</code> Handles form submission and validation.
          </li>
          <li className="list-group-item">
            <code>errors:</code> Tracks validation errors.
          </li>
          <li className="list-group-item">
            <code>reset</code>, <code>setValue</code>, <code>getValues:</code>{" "}
            Additional methods for form manipulation.
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
