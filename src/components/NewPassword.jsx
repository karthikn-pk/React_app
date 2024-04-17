import React from "react";

const NewPassword = () => {
  return (
    <div>
      <form className="w-[1000px] mx-auto mt-8 p-4 bg-gray-100 rounded-md">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">
            Username or email address *
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
        <button className="bg-gray-500 p-4 rounded-md ">
          Email New Password
        </button>
      </form>
    </div>
  );
};

export default NewPassword;
