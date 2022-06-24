import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const PumpForm = () => {
  function singlePumpf() {
    if (document.getElementById("pump1").checked) {
      document.getElementById("fieldsetpump2").style.display = "none";
      document.getElementById("fieldsetpump3").style.display = "none";
    }
  }

  // if (document.getElementById("p1fixedselect").checked) {
  //   document.getElementById("p1controlselect").style.display = "none";
  // }

  function doublePumpf() {
    if (document.getElementById("pump2").checked) {
      document.getElementById("fieldsetpump2").style.display = "block";
      document.getElementById("fieldsetpump3").style.display = "none";
    }
  }

  function triplePumpf() {
    if (document.getElementById("pump3").checked) {
      document.getElementById("fieldsetpump2").style.display = "block";
      document.getElementById("fieldsetpump3").style.display = "block";
    }
  }

  const [pumpSelect, setPumpSelect] = useState("");
  const [gpmPump1, setGpmPump1] = useState("");
  const [pressure, setPressure] = useState("");
  const [rpm, setRpm] = useState("");
  const [p1type, setP1type] = useState("");
  const [gpmPump2, setGpmPump2] = useState("");
  const [pressure2, setPressure2] = useState("");
  const [p2type, setP2type] = useState("");
  const [gpmPump3, setGpmPump3] = useState("");
  const [pressure3, setPressure3] = useState("");
  const [p3type, setP3type] = useState("");

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
      pumpSelect,
      gpmPump1,
      pressure,
      rpm,
      p1type,
      gpmPump2,
      pressure2,
      p2type,
      gpmPump3,
      pressure3,
      p3type,
      firstName,
      lastName,
      company,
      email,
      notes,
    };
    router.replace("/thankyou");

    fetch("/api/back-pump", {
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
        setPumpSelect("");
        setGpmPump1("");
        setPressure("");
        setRpm("");
        setP1type("");
        setGpmPump2("");
        setPressure2("");
        setP2type("");
        setGpmPump3("");
        setPressure3("");
        setP3type("");
        setFirstName("");
        setLastName("");
        setCompany("");
        setEmail("");
        setNotes("");
      }
    });
  };

  // The function below I need to know where it belongs to. p1variableselect is only found here.
  //   function p1Controlf() {
  //     if (document.getElmentById("p1variableselect").checked) {
  //       document.getElementById("p1controlselect").style.display = "block";
  //     }
  return (
    <div className="col-md-12 bg-light">
      <p>
        <strong> Not sure what hydraulic pump to select?</strong> Send us your
        technical requirements and we will work with you to select the proper
        pump for your application.
      </p>

      <div>
        <h5 className="hydraulic-pump-configurator">
          Hydraulic Pump Quote Configurator
        </h5>

        <form>
          <h5>* Select one checkbox</h5>

          {/* <input type="radio" name="pumpselect" id= pump1 value="singlePump" onclick = "singlePumpf()" checked /> */}
          <input
            type="radio"
            name="pumpSelect"
            id="pump1"
            value="singlePump"
            onClick={singlePumpf}
            defaultChecked
            onChange={(e) => {
              setPumpSelect(e.target.value);
            }}
          />
          <label htmlFor="pump1"> Single Pump</label>
          <br />

          <input
            type="radio"
            name="pumpSelect"
            id="pump2"
            value="doublePump"
            onClick={doublePumpf}
            onChange={(e) => {
              setPumpSelect(e.target.value);
            }}
          />
          <label htmlFor="pump2"> Double Pump</label>
          <br />

          <input
            type="radio"
            name="pumpSelect"
            id="pump3"
            value="Triplepump"
            onClick={triplePumpf}
            onChange={(e) => {
              setPumpSelect(e.target.value);
            }}
          />
          <label htmlFor="pump3"> Triple Pump</label>
          <br />
          <br />

          {/* <fieldset id= mainfiledsetpumps> */}
          <fieldset id="mainfiledsetpumps">
            <fieldset id="fieldsetpump1">
              <legend>
                <h5>
                  {" "}
                  <u>Single pump / First pump info:</u>
                </h5>
              </legend>
              <label
                className="pump-labels form-label-style"
                htmlFor="gpmPump1"
              >
                * GPM (single pump):{" "}
              </label>
              <input
                type="number"
                id="gpmPump1"
                className="input-fields"
                name="gpmPump1"
                placeholder="GPM required"
                required
                onChange={(e) => {
                  setGpmPump1(e.target.value);
                }}
              />
              <br />
              <label
                className="pump-labels form-label-style"
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
              <label className="pump-labels" htmlFor="rpm">
                * RPM:{" "}
              </label>
              <input
                type="number"
                id="rpm"
                name="rpm"
                placeholder="Max Cont. RPM"
                required
                onChange={(e) => {
                  setRpm(e.target.value);
                }}
              />
              <br /> <br />
              <h5>Single pump / First pump details.</h5>
              <input
                type="radio"
                name="p1type"
                value="p1fixed"
                id="p1fixedselect"
                defaultChecked
                onChange={(e) => {
                  setP1type(e.target.value);
                }}
              />
              <label htmlFor="p1fixed"> Fixed displacement / No Control</label>{" "}
              <br />
              <input
                type="radio"
                name="p1type"
                value="p1pressurecomp"
                onChange={(e) => {
                  setP1type(e.target.value);
                }}
              />
              <label htmlFor="p1pressurecomp">
                {" "}
                Variable displacement / Pressure Compensated{" "}
              </label>{" "}
              <br />
              <input
                type="radio"
                name="p1type"
                value="p1loadsensing"
                onChange={(e) => {
                  setP1type(e.target.value);
                }}
              />
              <label htmlFor="p1loadsensing">
                {" "}
                Varaible siplacement / Load Sensing
              </label>
              <br />
              <input
                type="radio"
                name="p1type"
                value="p1pressurecompwithremote"
                onChange={(e) => {
                  setP1type(e.target.value);
                }}
              />
              <label htmlFor="p1pressurecompwithremote">
                {" "}
                Variable displacement / Pressure Compensated with Remote Control{" "}
              </label>{" "}
              <br />
              <input
                type="radio"
                name="p1type"
                value="p1hplimiter"
                onChange={(e) => {
                  setP1type(e.target.value);
                }}
              />
              <label htmlFor="p1hplimiter">
                {" "}
                Varialbe displacement /HP Limiter{" "}
              </label>
              <br />
              <input
                type="radio"
                name="p1type"
                value="p1other"
                onChange={(e) => {
                  setP1type(e.target.value);
                }}
              />
              <label htmlFor="p1other">
                {" "}
                Other (please comment in notes below){" "}
              </label>
              <br /> <br />
            </fieldset>
            {/* <fieldset id="fieldsetpump2"  display:none> */}
            <fieldset id="fieldsetpump2">
              <legend>
                <h5>
                  {" "}
                  <u>Second stage pump info:</u>{" "}
                </h5>
              </legend>
              <label className="pump-labels" htmlFor="gpmPump2">
                * GPM (second stage):{" "}
              </label>
              <input
                type="number"
                id="gpmPump2"
                className="input-fields"
                name="gpmPump2"
                placeholder="GPM required"
                onChange={(e) => {
                  setGpmPump2(e.target.value);
                }}
                required
              />
              <br />
              <label className="pump-labels" htmlFor="pressure2">
                {" "}
                * Pressure (psi):
              </label>
              <input
                type="number"
                id="pressure2"
                className="input-fields"
                name="pressure2"
                placeholder="Max Cont. pressure 2"
                required
                onChange={(e) => {
                  setPressure2(e.target.value);
                }}
              />{" "}
              <br />
              <h5>Second stage pump details:</h5>
              <input
                type="radio"
                name="p2type"
                value="p2fixed"
                defaultChecked
                onChange={(e) => {
                  setP2type(e.target.value);
                }}
              />
              <label htmlFor="p2fixed"> Fixed displacement / No Controls</label>{" "}
              <br />
              <input
                type="radio"
                name="p2type"
                value="p2pressurecomp"
                onChange={(e) => {
                  setP2type(e.target.value);
                }}
              />
              <label htmlFor="p2pressurecomp">
                {" "}
                Variable displacement / Pressure Compensated{" "}
              </label>{" "}
              <br />
              <input
                type="radio"
                name="p2type"
                value="p2loadsensing"
                onChange={(e) => {
                  setP2type(e.target.value);
                }}
              />
              <label htmlFor="p2loadsensing">
                {" "}
                Variable displacement / Load Sensing
              </label>
              <br />
              <input
                type="radio"
                name="p2type"
                value="p2pressurecompwithremote"
                onChange={(e) => {
                  setP2type(e.target.value);
                }}
              />
              <label htmlFor="p2pressurecompwithremote">
                {" "}
                Variable displacement / Pressure Compensated with Remote Control{" "}
              </label>{" "}
              <br />
              <input
                type="radio"
                name="p2type"
                value="p2hplimiter"
                onChange={(e) => {
                  setP2type(e.target.value);
                }}
              />
              <label htmlFor="p2hplimiter">
                {" "}
                Variable displacement / HP Limiter{" "}
              </label>
              <br />
              <input
                type="radio"
                name="p2type"
                value="p2other"
                onChange={(e) => {
                  setP2type(e.target.value);
                }}
              />
              <label htmlFor="p2other">
                {" "}
                Other (please comment in notes below){" "}
              </label>
              <br /> <br />
            </fieldset>
            {/* <fieldset id = fieldsetpump3>  */}
            <fieldset id="fieldsetpump3">
              <legend>
                <h5>
                  {" "}
                  <u>Third stage pump.</u>{" "}
                </h5>
              </legend>
              <label className="pump-labels" htmlFor="gpmPump3">
                * GPM (third stage):{" "}
              </label>
              <input
                type="number"
                id="gpmPump3"
                className="input-fields"
                name="gpmPump3"
                placeholder="GPM required"
                required
                onChange={(e) => {
                  setGpmPump3(e.target.value);
                }}
              />
              <br />
              <label className="pump-labels" htmlFor="pressure3">
                {" "}
                * Pressure (psi):
              </label>
              <input
                type="number"
                id="pressure3"
                className="input-fields"
                name="pressure3"
                placeholder="Max Cont. pressure 3"
                required
                onChange={(e) => {
                  setPressure3(e.target.value);
                }}
              />{" "}
              <br />
              <h5>Third stage pump details:</h5>
              <input
                type="radio"
                name="p3type"
                value="p3fixed"
                defaultChecked
                onChange={(e) => {
                  setP3type(e.target.value);
                }}
              />
              <label htmlFor="p3type"> Fixed displacement / No Control. </label>{" "}
              <br />
              <input
                type="radio"
                name="p3type"
                value="p3pressurecomp"
                onChange={(e) => {
                  setP3type(e.target.value);
                }}
              />
              <label htmlFor="p3pressurecomp">
                {" "}
                Variable displacement / Pressure Compensated{" "}
              </label>{" "}
              <br />
              <input
                type="radio"
                name="p3type"
                value="p3loadsensing"
                onChange={(e) => {
                  setP3type(e.target.value);
                }}
              />
              <label htmlFor="p3loadsensing">
                {" "}
                Variable displacement / Load Sensing
              </label>
              <br />
              <input
                type="radio"
                name="p3type"
                value="p3pressurecompwithremote"
                onChange={(e) => {
                  setP3type(e.target.value);
                }}
              />
              <label htmlFor="p3pressurecompwithremote">
                {" "}
                Variable displacement / Pressure Compensated with Remote Control{" "}
              </label>{" "}
              <br />
              <input
                type="radio"
                name="p3type"
                value="p3hplimiter"
                onChange={(e) => {
                  setP3type(e.target.value);
                }}
              />
              <label htmlFor="p3hplimiter">
                {" "}
                Variable displacement / HP Limiter{" "}
              </label>
              <br />
              <input
                type="radio"
                name="p3type"
                value="p3other"
                onChange={(e) => {
                  setP3type(e.target.value);
                }}
              />
              <label htmlFor="p3other">
                {" "}
                Other (please comment in notes below){" "}
              </label>
              <br /> <br /> <br />
            </fieldset>
            <label className="pump-labels-final" htmlFor="firstname">
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
            <label className="pump-labels-final" htmlFor="lastname">
              * Last Name:{" "}
            </label>
            <input
              type="text"
              id="lastName"
              className="input-fields"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />{" "}
            <br />
            <label className="pump-labels-final" htmlFor="company">
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
            <label className="pump-labels-final" htmlFor="email">
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
            <br />
            <br />
            <input
              type="submit"
              name="submit"
              value="Submit"
              className="btn btn-primary"
              onClick={(e) => {
                handleSubmit(e);
              }}
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PumpForm;
