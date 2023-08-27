import React from "react";
import "../styles/style.css";

const Footer = () => {
  return (
    <footer>
      {" "}
      {/* Apply the 'footer' class */}
      <div className="container bg-light text-dark text-center py-3 customFooter ">
        <p>
          &copy; {new Date().getFullYear()} Your Company MoSalem. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
