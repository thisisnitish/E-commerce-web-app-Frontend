import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper/index";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

//Todo: Full fledged navbar
//Todo: Cart ke liye user authentiacation banana hai
const Menu = ({ history, path }) => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <Link style={currentTab(history, "/")} className="active item" to="/">
          Home
        </Link>
        <Link style={currentTab(history, "/cart")} className="item" to="/cart">
          Cart
        </Link>
        {isAuthenticated() && (
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="item"
            to="/user/dashboard"
          >
            Dashboard
          </Link>
        )}
        {!isAuthenticated() && (
          <Fragment>
            <Link
              style={currentTab(history, "/signup")}
              className="item"
              to="/signup"
            >
              Signup
            </Link>
            <Link
              style={currentTab(history, "/signin")}
              className="item"
              to="/signin"
            >
              Signin
            </Link>
          </Fragment>
        )}
        {isAuthenticated() && (
          <span
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
            className="item"
          >
            Signout
          </span>
        )}
      </div>
    </div>
  );
};

export default withRouter(Menu);
