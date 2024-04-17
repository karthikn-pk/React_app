import React from "react";
import Footer from "./Footer";
import { FaSearch } from "react-icons/fa";

const Body = () => {
  return (
    <div>
      <div className="w-[1345px] h-[490px] bg-banner mx-auto justify-center my-0 text-center flex flex-col text-white">
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
          <button className="bg-blue-600 text-white p-4 rounded-lg">
            <FaSearch />
          </button>

          <p className="underline underline-offset-2">
            Browse Companies by Activity, Age and Location
          </p>
        </div>
        <h1 className="text-6xl  mx-auto mt-10 text-center w-[700px]">
          HOW WELL DO YOU KNOW YOUR CUSTOMERS, SUPPLIERS OR COMPETITORS?
        </h1>
      </div>
      <div>
        <h1 className="text-6xl  mx-auto mt-10 text-center w-[700px]">
          Zauba Corp helps you know financial performance of businesses you deal
          with Access critical documents and information for facts based
          decision making
        </h1>
      </div>
      <div className="bg-assobanner w-[960px] h-[381px] mx-auto text-white text-left">
        <div className="w-[405px] mt-[50px] ml-[35px]">
          <h2 className="text-6xl mb-6">Articles of Association</h2>
          <p className="text-md">
            The Articles of Association is a document that contains the purpose
            of the company as well as the duties and responsibilities of its
            members defined and recorded clearly. It is an important document
            which needs to be filed with the Registrar of Companies.
          </p>
          <p>
            Articles of association often identify the manner in which a company
            will issue stock shares, pay dividends and audit financial records
            and power of voting rights.
          </p>
        </div>
      </div>
      <div className="flex w-[960px] h-[481px] mx-auto mt-8">
        <div className="w-[30%]">
          {" "}
          <img
            className="w-[350px] h-[245px]"
            src="https://www.zaubacorp.com/sites/default/themes/bootstrap_subtheme/images/img02.png"
            alt=""
          />
        </div>
        <div className="text-gray-700 w-[70%] ml-5">
          <h1 className="text-6xl font-medium mt-4">
            Memorandum of Association
          </h1>
          <p className="mt-4">
            Memorandum of Association is a document that regulates a company's
            external activities and must be drawn up on the formation of a
            registered or incorporated company. As the company's charter it
            forms the company's constitution.
          </p>
          <p className="mt-4">
            The memorandum of association gives the company's name, names of its
            members (shareholders) and number of shares held by them, and
            location of its registered office. It also states the company's (1)
            objectives, (2) amount of authorized share capital, (3) whether
            liability of its members is limited by shares or by guaranty, and
            (4) what type of contracts the company is allowed to enter into.
          </p>
          <p className="mt-4">
            The memorandum is a public document and may be inspected by anyone,
            usually at the public office where it is lodged.
          </p>
        </div>
      </div>

      <div className="bg-column3 w-[960px] h-[382px] mx-auto">
        <div className="text-white relative left-6 top-8 w-2/5 font-medium ">
          <h1 className="text-6xl ">Balance Sheet</h1>
          <p className="mt-4 ">
            Balance sheet is an accounting statement that summarises various
            assets, liabilities and equities held by a company on a specific
            date.
          </p>
          <p className="mt-4">
            Balance sheet is an important document for creditors, investors,
            customers and suppliers. All creditors and investors need to
            familiarize themselves with the assets, liabilities, and equity of a
            company. The balance sheet is the best place to find all financial
            information at one place.
          </p>
        </div>
      </div>

      <div className="bg-column4 w-[960px] h-[444px] mx-auto text-white font-medium  ">
        <div className="w-[650px] flex flex-col mx-auto text-center ">
          <h1 className="text-6xl mb-3">
            Charge Documents (Loans and Mortgages)
          </h1>
          <p>
            Charge documents provide details of assets pledged as security to
            financial institutions. As a customer, supplier, investor or
            creditor, it is important to be aware of advances of a company.
          </p>
        </div>
      </div>

      <div className="w-[960px] h-[444px] flex mx-auto mt-6 text-white font-medium ">
        <div className="bg-column5first w-[471px] h-[380px] text-center pt-14">
          <h3 className="text-5xl">Documents related </h3>
          <p className="text-3xl">
            to appointment <br />
            and resignation <br /> of <br />
            Directors
          </p>
        </div>
        <div className="bg-column5second w-[471px] ml-8 h-[380px] text-center pt-14">
          <h3 className="text-5xl">All information,</h3>
          <p className="text-3xl">
            documents and <br />
            forms filed with Registrar <br /> of <br />
            Companies
          </p>
        </div>
      </div>

      <div className="bg-column6 w-[1000px] h-[413px] flex mx-auto text-white font-medium mb-10">
        <div className="w-1/2 mt-10 ml-10">
          <h1 className="text-6xl mb-5">Who are we?</h1>
          <p className="text-justify">
            Zauba Corp is India's leading provider of commercial information and
            insight on businesses. The team behind Zauba Corp have one goal - to
            be your sole resource for critical information. We gather data from
            a number of official sources and third parties to give you all the
            information you need, in one easy to use website.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
// url() no-repeat scroll center center transparent
