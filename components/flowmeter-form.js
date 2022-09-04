import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const FlowmeterForm = () => {
  const [flowDirection, setFlowDirection] = useState("uni-directional-flow");
  const [readingDirection, setReadingDirection] = useState(
    "uni-directional-reading"
  );
  const [submitted, setSubmitted] = useState(false);

  const [gpm, setGpm] = useState("");
  const [pressure, setPressure] = useState("");
  const [fluid, setFluid] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

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
      gpm,
      pressure,
      fluid,
      flowDirection,
      readingDirection,
    };
    router.replace("/thankyou");

    fetch("/api/back-flowmeter", {
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
        setGpm("");
        setPressure("");
        setFluid("");
        setFlowDirection("");
        setReadingDirection("");
      }
    });
  };

  return (
    <div>
      <div className="col-md-12 bg-light">
        <p>
          <strong> Not sure what hydraulic flowmeter to select?</strong> Send us
          your technical requirements and we will work with you to select the
          proper hydraulic flowmeter for your application.
        </p>

        <h4 className="flowmeter-configurator">Flowmeter Quote Configurator</h4>

        <form>
          <p>
            <strong>
              <u>Flowmeter info:</u>
            </strong>
          </p>
          <label
            className="flowmeter-form-labels form-label-style"
            htmlFor="gpm"
          >
            {" "}
            GPM:{" "}
          </label>
          <input
            type="number"
            id="gpm"
            className="input-fields"
            placeholder="gpm"
            name="gpm"
            required
            onChange={(e) => {
              setGpm(e.target.value);
            }}
          />
          <br />
          <label
            className="flowmeter-form-labels form-label-style"
            htmlFor="pressure"
          >
            {" "}
            Pressure (psi):
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
          <label className="flowmeter-form-labels" htmlFor="fluid">
            Type of fluid{" "}
          </label>
          <input
            type="string"
            placeholder="Fluid used"
            name="fluid"
            required
            onChange={(e) => {
              setFluid(e.target.value);
            }}
          />
          <br /> <br />
          <p>
            <strong>* Flow Direction Options</strong>
          </p>
          <input
            type="radio"
            name="flowDirection"
            value="uni-directional-flow"
            id="flowUnidirectional"
            checked={flowDirection === "uni-directional-flow"}
            onChange={(e) => {
              setFlowDirection(e.target.value);
            }}
          />
          <label htmlFor="flowUniDirectional"> Uni-directional </label> &nbsp;
          <input
            type="radio"
            name="flowDirection"
            value="bi-directional-flow"
            id="flowBiDirectional"
            checked={flowDirection === "bi-directional-flow"}
            onChange={(e) => {
              setFlowDirection(e.target.value);
            }}
          />
          <label htmlFor="flowBiDirectional"> Bi-directional </label>
          <br /> <br />
          <p>
            <strong>* Flow Reading Options</strong>
          </p>
          <input
            type="radio"
            name="readingDirection"
            id="readingUniDirectional"
            value="uni-directional-reading"
            checked={readingDirection === "uni-directional-reading"}
            onChange={(e) => {
              setReadingDirection(e.target.value);
            }}
          />
          <label htmlFor="readingUniDirectional"> Uni-directional</label> &nbsp;
          <input
            type="radio"
            name="readingDirection"
            id="readingBiDirectional"
            value="bi-directional-reading"
            checked={readingDirection === "bi-directional-reading"}
            onChange={(e) => {
              setReadingDirection(e.target.value);
            }}
          />
          <label htmlFor="readingBiDirectional"> Bi-directional </label>
          <br />
          <br />
          <label className="flowmeter-labels-final" htmlFor="firstName">
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
          <label className="flowmeter-labels-final" htmlFor="lastName">
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
          <label className="flowmeter-labels-final" htmlFor="company">
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
          <label className="flowmeter-labels-final" htmlFor="email">
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
    </div>
  );
};

export default FlowmeterForm;
