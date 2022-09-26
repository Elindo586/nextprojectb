import React from "react";
import Link from "next/link";

const Footer = () => {
  function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }
  return (
    <div>
      <footer className="main-footer">
        <p className="copyright">
          © {fullYear()} Copyright - TU -<br />
          &nbsp;&nbsp; Developed by Edgar Lindo
        </p>
      </footer>
    </div>
  );
};

export default Footer;
