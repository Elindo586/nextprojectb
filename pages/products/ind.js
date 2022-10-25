import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Ind = () => {
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  });

  return (
    <div>
      <div>
        <Head></Head>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="dropdown">
              <button onClick={myFunction} className="dropbtn">
                Pumps
              </button>
              <div id="myDropdown" className="dropdown-content">
                <div>
                  <a href="https://www.tu.biz/products/piston-pumps">Piston</a>
                </div>
                <div>
                  <a href="https://www.tu.biz/products/vane-pumps">Vane</a>
                </div>
                <div>
                  <a href="https://www.tu.biz/products/gear-pumps">Gear</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ind;
