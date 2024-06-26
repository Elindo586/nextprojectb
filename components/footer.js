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
          <div className="row ">
            <div className=" col footer-privacy">PRIVACY POLICY</div>
          </div>
          <div className="row">
            <div className="col ">
              <p className="copyright">
                Copyright © {fullYear()} TU - All Rights Reserved{" "}
              </p>
            </div>
            <div className="col dev-by">
              <span className="dev-by2">Developed by:</span>{" "}
              <a
                className="edgar"
                href="https://www.edgarlindo.com/"
                target="blank"
              >
                Edgar Lindo
              </a>
            </div>

            <div className="dev-by">
              {/* <Row>
                <Col className="social-icon-col">
                  <a
                    className="footer-icon"
                    href="https://www.linkedin.com/in/edgarlindo"
                    target="blank"
                  >
                    <Image
                      src="/images/footer-images/footer-linkedin.png"
                      id="youtube-spanish"
                      alt="youtube spanish logo"
                      width={25}
                      height={25}
                      className="footer-icon"
                      title="LinkedIn"
                    />
                  </a>

                  <a
                    className="footer-icon"
                    href="https://twitter.com/MrEdgarLindo"
                    target="blank"
                  >
                    <Image
                      src="/images/footer-images/footer-twitter.png"
                      id="youtube-spanish"
                      alt="youtube spanish logo"
                      width={25}
                      height={25}
                      title="Twitter"
                    />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.facebook.com/RealEdgarLindo"
                    target="blank"
                  >
                    <Image
                      src="/images/footer-images/footer-facebook.png"
                      id="youtube-spanish"
                      alt="youtube spanish logo"
                      width={25}
                      height={25}
                      title="Facebook"
                    />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.youtube.com/c/EdgarLindoEL/videos"
                    target="blank"
                  >
                    <Image
                      src="/images/footer-images/footer-youtube.png"
                      id="youtube-spanish"
                      alt="youtube spanish logo"
                      width={25}
                      height={25}
                      title="YouTube English"
                    />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.youtube.com/c/EdgarLindo/videos"
                    target="blank"
                  >
                    <Image
                      src="/images/footer-images/footer-youtube.png"
                      id="youtube-spanish"
                      alt="youtube spanish logo"
                      width={25}
                      height={25}
                      title="YouTube Spanish"
                    />
                  </a>
                </Col>
              </Row> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
