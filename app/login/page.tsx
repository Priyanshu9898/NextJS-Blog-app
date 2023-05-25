"use client";
import Input from "@components/Input";
import React, { useState } from "react";

interface IntialStateProps {
  email: string;
  password: string;
}

const initialState: IntialStateProps = {
  email: "",
  password: "",
};

const Login = () => {
  const [value, setValue] = useState(initialState);

  const handleChange = (e: any) => {
    setValue({...value, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e: any) => {
    e.preventDefault;

  }

  return (
    <>
      <form className="max-w-sm mt-24 m-auto flex-col items-center justify-center" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl mt-12 mb-8">Login</h1>


        <Input
          type="text"
          name="email"
          value={value.email}
          placeholder="Enter Your Email"
          id="email"
          onChange={handleChange}
        />

        <Input
          type="password"
          name="password"
          value={value.password}
          placeholder="Enter Your Password"
          id="password"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="block w-full px-4 py-2 mt-4 text-white bg-gray-900 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
