import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#211113] flex text-white h-32">
        <p className="w-1/2 my-auto text-center">
          All Companies \ All Directors \ All Trademarks \ Import Export Data
          About Us \ FAQ \ Privacy Policy \ Terms of Use \ Refunds &
          Cancellation \ Contact US © 2023 Zauba Technologies Private Limited.
          All rights reserved.
        </p>
        <div className="w-1/2 text-3xl ml-[15%] my-auto flex flex-row ">
          <FaSquareFacebook className="bg-blue-500 text-white rounded-md ml-2" />
          <FaSquareXTwitter className="rounded-md ml-2" />
          <SiLinkedin className="bg-blue-500 text-white rounded-md ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
