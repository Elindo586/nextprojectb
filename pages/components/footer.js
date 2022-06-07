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
          © {fullYear()} Copyright Technical Union <br />
          &nbsp;&nbsp; | Developed by Edgar Lindo &
          <Link
            href="https://zichkoding.github.io"
            target="_blank"
            rel="noreferrer"
          >
            <b>
              <a> ZichKoding</a>
            </b>
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
