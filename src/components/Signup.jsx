import React, { useState } from "react";
import Signin from "./Signin";
import Footer from "./Footer";
import NewPassword from "./NewPassword";

const Signup = () => {
  const [login, setLogin] = useState(true);
  const [newPasswordRequest, setNewPasswordRequest] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
    setNewPasswordRequest(false);
  };

  const toggleNewPasswordRequest = () => {
    setNewPasswordRequest(!newPasswordRequest);
    setLogin(false);
  };

  return (
    <div>
      <div className="w-full h-[250px] bg-banner mx-auto justify-center my-0 text-center flex flex-col text-white">
        <div className="flex justify-evenly mt-5 w-[350px] mx-auto">
          <label>
            <input type="radio" value="company" />
            Company
          </label>
          <label>
            <input type="radio" value="director" />
            Director
          </label>
          <label>
            <input type="radio" value="trademark" />
            Trademark
          </label>
          <label>
            <input type="radio" value="address" />
            Address
          </label>
        </div>
        <div>
          <input
            type="text"
            name=""
            id=""
            className="w-[450px] mt-6 rounded-md p-2"
            placeholder="Enter company name or cin"
          />
          <p className="underline underline-offset-2">
            Browse Companies by Activity, Age and Location
          </p>
        </div>{" "}
      </div>
      <div>
        <h3 className="text-2xl mt-5 text-center">User Account</h3>
        <div className="ml-[25%] mt-5 text-blue-600 ">
          <button
            className="mr-5   focus:border-black focus:border-t-2 focus:border-r-2 focus:border-l-2 px-4 py-2"
            onClick={toggleLogin}>
            Create New Account
          </button>

          <button
            className="focus:border-black focus:border-t-2 focus:border-r-2 focus:border-l-2  px-4 py-2"
            onClick={toggleLogin}>
            Log in
          </button>
          <button
            className="ml-5 focus:border-black focus:border-t-2 focus:border-r-2 focus:border-l-2  px-4 py-2"
            onClick={toggleNewPasswordRequest}>
            New Password Request
          </button>
        </div>

        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
          {login && !newPasswordRequest && (
            <form className="w-[1000px] mx-auto mt-8 p-4 bg-gray-100 rounded-md">
              <div className="mb-4">
                <label className="block mb-2" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-[900px] p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-[900px] p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="organization">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  className="w-[900px] p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="designation">
                  Designation *
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  required
                  className="w-[900px] p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="username">
                  Username *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="w-[900px] p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">
                  E-mail address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
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
                  id="password"
                  name="password"
                  required
                  minLength={8}
                  className="w-[900px] p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="confirmPassword">
                  Confirm password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  minLength={8}
                  className="w-[900px] p-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-[150px] bg-green-500 text-white p-3 rounded-md hover:bg-blue-600">
                Create Account
              </button>
            </form>
          )}
          {!login && !newPasswordRequest && <Signin />}
          {newPasswordRequest && <NewPassword />}
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Signup;
