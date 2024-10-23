import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {register, handleSubmit}= useForm();

  const onSubmit=(data)=>{
    console.log(data)
  }
  return (
    <div className="formDiv">
      <h3 style={{ textAlign: "center", color: "blue" }}>Enter Form data</h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">Username</label>
          <input {...register('userName')}type="text" className="input" />
        </div>
        <div className="field">
          <label className="label">Email</label>
          <input {...register('email')} type="text" className="input" />
        </div>
        <div className="field">
          <label className="label">Password</label>
          <input {...register('password')} type="password" className="input" />
        </div>
        <div>
          <button type="submit" className="button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
