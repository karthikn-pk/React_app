import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="flex justify-around">
      <div>
        <Link to="/">
          <img
            src="https://www.zaubacorp.com/sites/default/themes/bootstrap_subtheme/images/logo-Zauba.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="my-auto">
        <ul className="flex text-black bg-white text-xl m-4 p-4">
          <li
            className="p-2 m-3 bg-orange-400 rounded-xl cursor-pointer shadow-xl"
            onClick={toggleDropdown}>
            Products
            {dropdown && (
              <div className="absolute bg-gray-100 rounded-sm mt-2 py-2 px-4">
                <ul className="text-lg">
                  <li className="hover:bg-gray-400 rounded-md">
                    <Link to="/newCompanyAlerts">New company alerts</Link>
                  </li>
                  <li className="hover:bg-gray-400 rounded-md">
                    <Link to="/leadList">Lead list</Link>
                  </li>
                  <li className="hover:bg-gray-400 rounded-md">
                    <Link to="/researchReport">Research report</Link>
                  </li>
                  <li className="hover:bg-gray-400 rounded-md ">
                    <Link to="/chargeSearch">Charge search</Link>
                  </li>
                  <li className="hover:bg-gray-400 rounded-md">
                    <Link to="/importExportData">Import export data</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="p-2 m-3 bg-blue-600 rounded-xl shadow-xl">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="p-2 m-3 bg-blue-700 rounded-xl shadow-xl">
            <Link to="/signin">Sign In</Link>
          </li>

          <li className="p-2 m-3 bg-blue-500 rounded-xl shadow-xl">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
