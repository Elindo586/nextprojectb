import React from "react";

const Footer = () => {
  function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }
  return (
    <div>
      <footer className="main-footer">
        <p className="copyright">
          © {fullYear()} Copyright Technical Union <br />
          &nbsp;&nbsp; | Developed by Edgar Lindo
        </p>
      </footer>
    </div>
  );
};

export default Footer;
