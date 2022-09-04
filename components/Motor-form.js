import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const MotorForm = () => {
  const [torque, setTorque] = useState("");
  const [pressure, setPressure] = useState("");
  const [rpm, setRpm] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending");

    let data = {
      firstName,
      lastName,
      company,
      email,
      notes,
      torque,
      pressure,
      rpm,
    };
    router.replace("/thankyou");

    fetch("/api/back-motor", {
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
        setLastName("");
        setCompany("");
        setEmail("");
        setNotes("");
        setTorque("");
        setPressure("");
        setRpm("");
      }
    });
  };

  return (
    <div className="col-md-12 bg-light">
      <p>
        <strong> Not sure what hydraulic motor to select?</strong> Send us your
        technical requirements and we will work with you to select the proper
        hydraulic motor for your application.
      </p>

      <p className="hydraulicMotor1Configurator">
        <h5>Hydraulic Motor Quote Configurator</h5>
      </p>

      <form>
        <p>
          <strong>
            <u>Hydraulic Motor info:</u>
          </strong>
        </p>
        {/* style="display:inline-block" ADD TO CSS FOR ELEMENT BELOW */}
        <label className="motor-form-labels form-label-style" htmlFor="torque">
          * Torque (in/lbs):{" "}
        </label>
        <input
          type="number"
          id="torque"
          className="input-fields"
          name="torque"
          placeholder="Torque required"
          required
          onChange={(e) => {
            setTorque(e.target.value);
          }}
        />
        <br />
        {/* style="display:inline-block" ADD TO CSS FOR ELEMENT BELOW */}
        <label
          className="motor-form-labels form-label-style"
          htmlFor="pressure"
        >
          {" "}
          * Pressure (psi):
        </label>
        <input
          type="number"
          id="pressure"
          className="input-fields"
          name="pressure"
          placeholder="Max Cont. pressure"
          required
          onChange={(e) => {
            setPressure(e.target.value);
          }}
        />{" "}
        <br />
        <label className="motor-form-labels" htmlFor="rpm">
          * RPM:{" "}
        </label>
        <input
          type="number"
          id="rpm"
          className="input-fields"
          name="rpm"
          placeholder="Max Cont. RPM"
          required
          onChange={(e) => {
            setRpm(e.target.value);
          }}
        />
        <br /> <br />
        <label className="motor-labels-final" htmlFor="firstname">
          * First Name:{" "}
        </label>
        <input
          type="text"
          id="firstName"
          className="input-fields"
          name="firstName"
          placeholder=" First Name"
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />{" "}
        <br />
        <label className="motor-labels-final" htmlFor="lastname">
          * Last Name:{" "}
        </label>
        <input
          type="text"
          id="lastName"
          className="input-fields"
          name="firstName"
          placeholder="Last Name"
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />{" "}
        <br />
        <label className="motor-labels-final" htmlFor="company">
          * Company:{" "}
        </label>
        <input
          type="text"
          id="company"
          className="input-fields"
          name="company"
          placeholder="Your company"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />{" "}
        <br />
        <label className="motor-labels-final" htmlFor="email">
          {" "}
          * E-mail:{" "}
        </label>
        <input
          type="email"
          id="email"
          className="input-fields"
          name="email"
          placeholder="Your E-mail"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <label className="form-display-block" htmlFor="notes">
          {" "}
          Notes:{" "}
        </label>
        <textarea
          className="form-textarea"
          type="text"
          id="notes"
          name="notes"
          placeholder="Include any additional information"
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />{" "}
        <br />
        <input className="form-display-none" type="text" name="_honey" />
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="btn btn-primary"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
    </div>
  );
};

export default MotorForm;
