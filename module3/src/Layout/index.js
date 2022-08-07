import React from "react";
import { Link } from "react-router-dom";

const Layout = (props) => {
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
        <div>
          <Link
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
        </div>
      </header>
      <section style={{ height: "80vh" }}>{props.children}</section>
      <footer style={{ height: "10vh" }}>&copy; Daksh 2022</footer>
    </>
  );
};

export default Layout;
