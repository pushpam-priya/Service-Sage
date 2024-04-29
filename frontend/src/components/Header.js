import React, { Component } from "react";
import { getCSRFToken } from "./Utils"; // Import the getCSRFToken function

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }

  componentDidMount() {
    fetch("items/is_auth/", {
      headers: {
        "X-CSRFToken": getCSRFToken(), // Include the CSRF token in the headers
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.is_logged_in) {
          this.setState({
            isLoggedin: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <nav className="py-6 px-6 flex justify-between items-center border-b border-gray-200">
        <a href="" className="text-xl font-semibold">
          Service Sage
        </a>
        <div className="space-x-6">
          {this.state.isLoggedin ? (
            <>
              <a
                href="/items/new"
                className="text-lg font-semibold hover:text-gray-500"
              >
                New item
              </a>
              <a
                href="/items"
                className="text-lg font-semibold hover:text-gray-500"
              >
                Browse
              </a>
              <a
                href="/inbox"
                className="px-6 py-3 text-lg font-semibold bg-cyan-500 text-black hover:bg-teal-700"
              >
                Inbox
              </a>
              <a
                href="/dashboard"
                className="px-6 py-3 text-lg font-semibold bg-cyan-500 bg-cyan-500 text-black hover:bg-gray-700"
              >
                Dashboard
              </a>
              <a
                href="/core/logout"
                className="px-6 py-3 text-lg font-semibold bg-cyan-500 bg-cyan-500 text-black hover:bg-gray-700"
              >
                Logout
              </a>
            </>
          ) : (
            <>
              <a
                href="/core/signup"
                className="px-6 py-3 text-lg font-semibold bg-cyan-500 text-purple hover:bg-teal-700"
              >
                Sign up
              </a>
              <a
                href="/core/login"
                className="px-6 py-3 text-lg font-semibold bg-cyan-500 text-purple hover:bg-gray-700"
              >
                Log in
              </a>
            </>
          )}
        </div>
      </nav>
    );
  }
}

export default Header;
