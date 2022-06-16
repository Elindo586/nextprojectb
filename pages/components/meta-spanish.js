import React from "react";
import Link from "next/link";

function MetaSpanish(props) {
  return (
    <div>
      <div> 1 {props.title}</div>
      <div> 2 {props.body} </div>
      <div> 3 {props.description}</div>
    </div>
  );
}

export default MetaSpanish;
