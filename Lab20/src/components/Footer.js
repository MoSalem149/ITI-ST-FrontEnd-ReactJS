import React from "react";
import "../styles/style.css";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      {" "}
      <div className=" bg-light text-dark text-center py-3 customFooter ">
        <p>
          &copy; {new Date().getFullYear()} Your Company MoSalem. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
