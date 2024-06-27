import React from "react";

const Footer = () => {
  function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }
  return (
    <div>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className=" col footer-privacy">PRIVACY POLICY</div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-sm-6">
                  {" "}
                  <p className="copyright">Copyright © {fullYear()} TU </p>
                </div>
                <div className="col-sm-6">
                  <p className="copyright">All Rights Reserved </p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="row">
                <div className="col-sm-6">
                  <p className="dev-by">Developed by:</p>
                </div>
                <div className="col-sm-6">
                  <a
                    className="edgar"
                    href="https://www.edgarlindo.com/"
                    target="blank"
                  >
                    Edgar Lindo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
