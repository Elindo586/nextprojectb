import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const MotorFormSpanish = () => {
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
    if (firstName === "") {
      alert("Please enter your Name");
    } else if (email === "") {
      alert("Please enter a valid email.");
    } else {
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
      router.replace("/thank-you");

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
    }
  };

  return (
    <div className="col-md-12 bg-light">
      <p>
        <strong> No está seguro que motor seleccionar?</strong> Envienos sus
        requerimientos y le ayudaremos a seleccionar el motor correcto para su
        aplicación.
      </p>

      <p className="hydraulicMotor1Configurator">
        <h5>Configurador para motor hidráulico</h5>
      </p>

      <form>
        <p>
          <strong>
            <u> Detalles:</u>
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
          placeholder="Torque requerido"
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
          * Presión (psi):
        </label>
        <input
          type="number"
          id="pressure"
          className="input-fields"
          name="pressure"
          placeholder="Presión máxima"
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
          * Nombre:{" "}
        </label>
        <input
          type="text"
          id="firstName"
          className="input-fields"
          name="firstName"
          placeholder=" Nombre"
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />{" "}
        <br />
        <label className="motor-labels-final" htmlFor="lastname">
          * Apellido:{" "}
        </label>
        <input
          type="text"
          id="lastName"
          className="input-fields"
          name="firstName"
          placeholder="Apellido"
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />{" "}
        <br />
        <label className="motor-labels-final" htmlFor="company">
          * Empresa:{" "}
        </label>
        <input
          type="text"
          id="company"
          className="input-fields"
          name="company"
          placeholder="Empresa"
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
          placeholder="E-mail"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <label className="form-display-block" htmlFor="notes">
          {" "}
          Notas:{" "}
        </label>
        <textarea
          className="form-textarea"
          type="text"
          id="notes"
          name="notes"
          placeholder="Notas adicionales"
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

export default MotorFormSpanish;
