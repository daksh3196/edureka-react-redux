import React from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Layout = (props) => {
  const history = useHistory();
  const accessToken = Cookies.get("token");
  const isAuthenticated = !!accessToken;

  const handleLogOut = () => {
    Cookies.remove("token");
    history.push("/");
  };
  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "40px",
          height: "10vh",
          width: "100vw",
        }}
      >
        <div style={{ display: "flex" }}>
          <Link
            className="logout-div"
            to="/"
            style={{
              textDecoration: "auto",
              padding: 10,
              color: "#db7093",
              border: "1px solid",
            }}
          >
            Home
          </Link>
          <Link
            className="logout-div"
            to="/courses"
            style={{
              textDecoration: "auto",
              padding: 10,
              color: "#db7093",
              border: "1px solid",
            }}
          >
            Courses
          </Link>
          <Link
            className="logout-div"
            to="/enquiries"
            style={{
              textDecoration: "auto",
              padding: 10,
              color: "#db7093",
              border: "1px solid",
            }}
          >
            Enquiries
          </Link>
          {isAuthenticated ? (
            <div
              className="logout-div"
              onClick={handleLogOut}
              style={{
                textDecoration: "auto",
                padding: 10,
                color: "#db7093",
                border: "1px solid",
                pointerEvents: "all",
              }}
            >
              Logout
            </div>
          ) : (
            <Link
              className="logout-div"
              to="/login"
              style={{
                textDecoration: "auto",
                padding: 10,
                color: "#db7093",
                border: "1px solid",
              }}
            >
              Login
            </Link>
          )}
        </div>
      </header>
      <section style={{ height: "80vh" }}>{props.children}</section>
      <footer style={{ height: "10vh" }}>&copy; Daksh 2022</footer>
    </>
  );
};

export default Layout;
