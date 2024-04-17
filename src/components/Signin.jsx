import React from "react";

const Signin = () => {
  return (
    <div>
      {" "}
      <form className="w-[1000px] mx-auto mt-8 p-4 bg-gray-100 rounded-md">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">
            Username *
          </label>
          <input
            type="text"
            id="loginusername"
            name="username"
            required
            className="w-[900px] p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">
            Password *
          </label>
          <input
            type="password"
            id="loginpassword"
            name="password"
            required
            className="w-[900px] p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="captcha">
            Captcha *
          </label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            required
            className="w-[900px] p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-[80px] bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
