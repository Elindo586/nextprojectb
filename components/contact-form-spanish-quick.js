import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ContactFormSpanishQuick() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const checkSubmit = (e) => {
    if (firstName === "") {
      alert("Please enter your first name");
    } else if (email === "") {
      alert("Please enter a valid email");
    } else {
      e.preventDefault();

      console.log("Sending");

      let data = {
        firstName,
        email,
        notes,
      };
      router.replace("/thank-you");

      fetch("/api/contact-spanish", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");

        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setFirstName("");
          setCompany("");
          setEmail("");
          setCountry("");
          setNotes("");
        }
      });
    }
  };

  return (
    <div className="col bg-light">
      {/* <h4 className="get-in-touch">Contáctenos.</h4> */}
      <form className="contact-us-form">
        <input
          type="hidden"
          name="_next"
          // value="http://www.tu.biz/thankyou.html"
        />

        <label htmlFor="firstname" className="form-label">
          * Nombre:{" "}
        </label>
        <input
          className="form-control"
          type="text"
          id="firstname"
          name="firstname"
          placeholder=" Su nombre"
          required=""
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br />

        {/* <label htmlFor="company" className="form-label">
          {" "}
          Empresa:{" "}
        </label>
        <input
          className="form-control"
          type="text"
          id="company"
          name="company"
          placeholder="Your company"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <br /> */}

        <label htmlFor="email" className="form-label">
          {" "}
          * E-mail:{" "}
        </label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          placeholder="Su E-mail"
          required=""
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        {/* <label htmlFor="country" className="form-label">
          {" "}
          * País:{" "}
        </label>
        <input
          className="form-control"
          type="text"
          id="country"
          name="country"
          placeholder="Your Country"
          required=""
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <br /> */}

        <label htmlFor="notes"> * Mensaje: </label>

        <textarea
          className="form-control"
          type="text"
          id="notes"
          name="notes"
          placeholder="Enviar su mensaje aquí."
          rows="5"
          required=""
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></textarea>

        <input
          className="contact-your-message-input"
          type="text"
          name="_honey"
        />
        <br />

        <input
          type="submit"
          name="submit"
          value="enviar"
          className="btn btn-primary"
          onClick={(e) => {
            checkSubmit(e);
          }}
        />
      </form>
    </div>
  );
}
