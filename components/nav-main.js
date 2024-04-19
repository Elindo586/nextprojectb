import { React, useState, useEffect } from "react";
import Link from "next/link";

function MainNav() {
  const [isPath, setIsPath] = useState();
  useEffect(() => {
    title();
  }, [isPath]);

  const show = () => {
    let drop = document.getElementById("navbarTogglerDemo02");

    if (drop.classList.value === "navbar-collapse collapse") {
      drop.classList.value = "navbar-collapse collapse show";
    } else {
      drop.classList.value = "navbar-collapse collapse";
    }
  };

  const title = () => {
    let findTitle = window.location.pathname;
    setIsPath(findTitle);
    // document.title = `TU  | ${findTitle}`;
    switch (findTitle) {
      case "/":
        document.title = "TU | Home";
        break;
      case "/products":
        document.title = "TU | Products";
        break;
      case "/services/fluid-analysis":
        document.title = "TU | Services";
        break;
      case "/inventory":
        document.title = "TU | Inventory";
        break;
      case "/fluid-power-formulas":
        document.title = "TU | Formulas";
        break;
      case "/interactive":
        document.title = "TU | Interactive";
        break;
      case "/contact-us":
        document.title = "TU | Contact Us";
        break;
      default:
        console.log("This is not a part of this website.");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark navbar-dark"
      onClick={title}
    >
      <Link legacyBehavior href="/">
        <a onClick={title} className="navbar-brand">
          &nbsp; <strong>TU</strong>
        </a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={show}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link legacyBehavior href="/">
              <a className="nav-link" onClick={title}>
                Home
              </a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="/Products/products.html">| Products</a> */}
            <Link legacyBehavior href="/products">
              <a className="nav-link" onClick={title}>
                Products
              </a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="/Services/Services.html">| Services</a> */}
            <Link legacyBehavior href="/services/fluid-analysis">
              <a className="nav-link" onClick={title}>
                Services
              </a>
            </Link>
          </li>

          <li className="nav-item">
            <Link legacyBehavior href="/inventory">
              <a className="nav-link">Inventory</a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="formulas.html">| Formulas</a> */}
            <Link legacyBehavior href="/fluid-power-formulas">
              <a className="nav-link" onClick={title}>
                Formulas
              </a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="Interactive.html">| Interactive</a> */}
            <Link legacyBehavior href="/interactive">
              <a className="nav-link" onClick={title}>
                Interactive
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link legacyBehavior href="/video-blog/english">
              <a className="nav-link" onClick={title}>
                Video-Blogs
              </a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="contactus.html">| Contact Us</a> */}
            <Link legacyBehavior href="/contact-us">
              <a className="nav-link" onClick={title}>
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
