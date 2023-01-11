import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselMain from "../../components/carousel-main";

const Ind = () => {
  //  This is another function to open and close the myDropdown1 div.
  //  https://www.geeksforgeeks.org/how-to-toggle-an-element-class-in-javascript/

  // function myFunction1() {
  //     var dropdowns = document.getElementById("myDropdown1");
  //     if (dropdowns.classList.contains("show1")) {
  //       dropdowns.classList.remove("show1");
  //     } else {
  //       dropdowns.classList.add("show1");
  //     }
  //   }
  // -------
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
  }

  // Close the dropdown menu if the user clicks outside of it

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn1")) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show1")) {
            openDropdown.classList.remove("show1");
          }
        }
      }
    };
  });

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }

  // Close the dropdown menu if the user clicks outside of it

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn2")) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show2")) {
            openDropdown.classList.remove("show2");
          }
        }
      }
    };
  });

  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
  }

  // Close the dropdown menu if the user clicks outside of it

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn3")) {
        var dropdowns = document.getElementsByClassName("dropdown-content3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show3")) {
            openDropdown.classList.remove("show3");
          }
        }
      }
    };
  });

  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show4");
  }

  // Close the dropdown menu if the user clicks outside of it

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn4")) {
        var dropdowns = document.getElementsByClassName("dropdown-content4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show4")) {
            openDropdown.classList.remove("show4");
          }
        }
      }
    };
  });

  function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show5");
  }

  // Close the dropdown menu if the user clicks outside of it

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn5")) {
        var dropdowns = document.getElementsByClassName("dropdown-content5");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show5")) {
            openDropdown.classList.remove("show5");
          }
        }
      }
    };
  });

  function myFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show6");
  }

  // Close the dropdown menu if the user clicks outside of it

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn6")) {
        var dropdowns = document.getElementsByClassName("dropdown-content6");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show6")) {
            openDropdown.classList.remove("show6");
          }
        }
      }
    };
  });

  return (
    <div>
      <div>
        <Head>
          {/* Main */}
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/tu-favicon.png"
          />

          <meta
            name="facebook-domain-verification"
            content="fzctnjbrtlybvytmamk8glkng9af7p"
          />
          <title>TU | Products</title>
          <meta
            name="description"
            content="Large selection of industrial products for hydraulics, pneumatics, electrical and mechanical items."
          />
          <meta
            name="keywords"
            content="tu, products, hydraulic, valves, filters, pumps, motors,"
          />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph tags */}

          <meta
            property="og:title"
            content="TU | Product selections"
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content="Large selection of industrial products for hydraulics, pneumatics, electrical and mechanical items."
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz"
            id="meta-og-url"
          />
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-english/"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU | Product selections " />

          <meta
            name="twitter:description"
            content="Large selection of industrial products for hydraulics, pneumatics, electrical and mechanical items."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-english/"
          />
        </Head>
      </div>{" "}
      <div>
        <CarouselMain />
      </div>
      <Container>
        <Row>
          <Col className="product-centering">
            {" "}
            <b>Products</b>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="product-col">
            <div className="dropdown1">
              <button onClick={myFunction1} className="dropbtn1">
                Pumps
              </button>
              <div id="myDropdown1" className="dropdown-content1">
                <div>
                  <Link legacyBehavior href="/products/piston-pumps">
                    Piston
                  </Link>
                </div>
                <div>
                  <Link legacyBehavior href="/products/vane-pumps">
                    Vane
                  </Link>
                </div>
                <div>
                  <Link legacyBehavior href="/products/gear-pumps">
                    Gear
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="dropdown2">
              <button onClick={myFunction2} className="dropbtn2">
                Motors
              </button>
              <div id="myDropdown2" className="dropdown-content2">
                <div>
                  <Link href="/products/geroler-motors">Geroler Motors</Link>
                </div>
                <div>
                  <Link href="/products/vane-motors">Vane Motors</Link>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="dropdown3">
              <button onClick={myFunction3} className="dropbtn3">
                Valves
              </button>
              <div id="myDropdown3" className="dropdown-content3">
                <div className="dropdown-title"> Industrial Valves</div>
                <div>
                  <Link href="/products/industrial-valves/directional-control-valves">
                    Directional Control
                  </Link>
                </div>
                <div>
                  <Link href="/products/industrial-valves/flow-control-valves">
                    Flow Control
                  </Link>
                </div>
                <div className="dropdown-title"> Mobile Valves</div>
                <div>
                  <Link href="/products/mobile-valves/hydraulic-counterbalance-valves">
                    Counter Balance
                  </Link>
                </div>
                <div>
                  <Link href="/products/mobile-valves/hydraulic-sequence-valves">
                    Sequence
                  </Link>
                </div>
                <div>
                  <Link href="/products/mobile-valves/hydraulic-relief-valves">
                    Relief
                  </Link>
                </div>
                <div>
                  <Link href="/products/mobile-valves/hydraulic-check-valves">
                    Check
                  </Link>
                </div>
                <div>
                  <Link href="/products/mobile-valves/hydraulic-shuttle-valves">
                    Shuttle
                  </Link>
                </div>{" "}
                <div>
                  <Link href="/products/mobile-valves/hydraulic-hose-burst-valves">
                    Hose Burts
                  </Link>
                </div>{" "}
                <div>
                  <Link href="/products/mobile-valves/hydraulic-flow-divider-valves">
                    Flow Divider
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="dropdown4">
              <button onClick={myFunction4} className="dropbtn4">
                Flowmeters
              </button>
              <div id="myDropdown4" className="dropdown-content4">
                <div>
                  <Link href="/products/flowmeters">Flowmeter</Link>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="dropdown5">
              <button onClick={myFunction5} className="dropbtn5">
                Manifolds
              </button>
              <div id="myDropdown5" className="dropdown-content5">
                <div>
                  <Link href="/products/hydraulic-manifolds">Manifolds</Link>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="dropdown6">
              <button onClick={myFunction6} className="dropbtn6">
                Filters
              </button>
              <div id="myDropdown6" className="dropdown-content6">
                <div>
                  <Link href="/products/filter-elements">Filter Elements</Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="footer-spacer-products"></div>
        </Row>
      </Container>
    </div>
  );
};

export default Ind;
