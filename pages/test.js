import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductNav2 from "../components/nav-productss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FilterElements = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ProductNav2 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FilterElements;
