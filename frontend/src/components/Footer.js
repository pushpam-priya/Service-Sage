// Footer.jsx
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="py-6 px-6 flex justify-between bg-gray-800">
        <div className="w-2/3 pr-10">
          <h3 className="mb-5 font-semibold text-gray-400">About</h3>
          <p className="text-lg text-gray-500">
            This project represents the culmination of our final year, where we
            developed a dynamic web application using Django and ReactJS. It's
            primary goal is to develop a E-marketplace website, where customer
            can access wide range of product and services.
          </p>
          <a
            href="https://www.flaticon.com/free-icons/customer-service"
            title="customer service icons"
          >
            Customer service icons created by Awicon - Flaticon
          </a>
        </div>
        <div className="w-1/3">
          <h3 className="mb-5 font-semibold text-gray-400">Menu</h3>
          <ul className="space-y-2">
            {/* Replace the URLs with React Router links */}
            <li>
              <a
                href="core/about"
                className="text-lg text-teal-500 hover:text-teal-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="core/contact"
                className="text-lg text-teal-500 hover:text-teal-700"
              >
                Contact
              </a>{" "}
              <br />
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
