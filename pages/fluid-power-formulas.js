import React from "react";
import { useState } from "react";
import Head from "next/head";
import Script from "next/script";

const Formulas = () => {
  // state for Force
  const [isPressure, setIsPressure] = useState();
  const [isArea, setIsArea] = useState();
  // state for Gpm
  const [isRpm2, setIsRpm2] = useState();
  const [isDisplacement2, setIsDisplacement2] = useState();
  // state for Hyd HP
  const [isGpm3, setIsGpm3] = useState();
  const [isPsi3, setIsPsi3] = useState();
  // state for Torque (in lbs)
  const [isPsi4, setIsPsi4] = useState();
  const [isArea4, setIsArea4] = useState();
  // state for Torque (in lbs)
  const [isHp5, setIsHp5] = useState();
  const [isRpm5, setIsRpm5] = useState();
  // Cylinder area (in²)
  const [isDia6, setIsDia6] = useState();
  // EREA - Effected Rod End Area (in²)
  const [isDia12, setIsDia12] = useState();
  const [isRod12, setIsRod12] = useState();
  // Cyl Time (seconds)
  const [isArea7, setIsArea7] = useState();
  const [isStroke7, setIsStroke7] = useState();
  const [isGpm7, setIsGpm7] = useState();
  // Cyl HP
  const [isCylSpeed8, setIsCylSpeed8] = useState();
  const [isCylForce8, setIsCylForce8] = useState();
  // Cyl Adj. gpm on retract
  const [isCylArea9, setIsCylArea9] = useState();
  const [isGpm9, setIsGpm9] = useState();
  const [isErea9, setIsErea9] = useState();
  // Cyl Speed (ft/min)
  const [isStroke10, setIsStroke10] = useState();
  const [isTime10, setIsTime10] = useState();
  // Cyl Speed (ft/min)
  const [isGpm11, setIsGpm11] = useState();
  const [isArea11, setIsArea11] = useState();

  const getVariables = () => {
    let activeId = document.activeElement.id;
    let activeValue = document.activeElement.value;
    switch (activeId) {
      // Force
      case "pressure1":
        setIsPressure(activeValue);
        break;
      case "area1":
        setIsArea(activeValue);
        break;
      // GPM
      case "rpm2":
        setIsRpm2(activeValue);
        break;
      case "displacement2":
        setIsDisplacement2(activeValue);
        break;
      // Hyd HP
      case "gpm3":
        setIsGpm3(activeValue);
        break;
      case "psi3":
        setIsPsi3(activeValue);
        break;
      // Torque (in lbs)
      case "psi4":
        setIsPsi4(activeValue);
        break;
      case "area4":
        setIsArea4(activeValue);
        break;
      // Torque (in lbs)
      case "hp5":
        setIsHp5(activeValue);
        break;
      case "rpm5":
        setIsRpm5(activeValue);
        break;
      // Cylinder area (in²)
      case "dia6":
        setIsDia6(activeValue);
        break;
      // EREA - Effected Rod End Area (in²)
      case "dia12":
        setIsDia12(activeValue);
        break;
      case "rod12":
        setIsRod12(activeValue);
        break;
      // Cyl Time (seconds)
      case "area7":
        setIsArea7(activeValue);
        break;
      case "stroke7":
        setIsStroke7(activeValue);
        break;
      case "gpm7":
        setIsGpm7(activeValue);
        break;
      // Cyl HP
      case "cylSpeed8":
        setIsCylSpeed8(activeValue);
        break;
      case "cylForce8":
        setIsCylForce8(activeValue);
        break;
      // Cyl Adj. gpm on retract
      case "cylArea9":
        setIsCylArea9(activeValue);
        break;
      case "gpm9":
        setIsGpm9(activeValue);
        break;
      case "erea9":
        setIsErea9(activeValue);
        break;
      // Cyl Speed (ft/min)
      case "stroke10":
        setIsStroke10(activeValue);
        break;
      case "time10":
        setIsTime10(activeValue);
        break;
      // Cyl Speed (ft/min)
      case "gpm11":
        setIsGpm11(activeValue);
        break;
      case "area11":
        setIsArea11(activeValue);
        break;
      default:
        console.log("Wrong elements to interact with.");
    }
  };

  // Force
  if (typeof window !== "undefined") {
    let forceResult = document.getElementById("forceResult");
  }

  function force1(pressure, area) {
    return pressure * area;
  }

  const equals = () => {
    const pressureValue = Number(isPressure);
    const areaValue = Number(isArea);
    const result = force1(pressureValue, areaValue);

    forceResult.innerHTML = result + " lbs";
  };

  // GPM
  if (typeof window !== "undefined") {
    const gpmresult = document.getElementById("gpmresult");
  }

  const c2 = 231;

  function gpm(rpm2, displacement2) {
    return (rpm2 * displacement2) / c2;
  }

  const equals2 = () => {
    const rpmValue = Number(isRpm2);
    const displacementValue = Number(isDisplacement2);
    const result2 = gpm(rpmValue, displacementValue);

    gpmresult.innerHTML = result2 + " gpm";
  };

  // Hyd HP
  if (typeof window !== "undefined") {
    const hydHPResult = document.getElementById("hydHPResult");
  }

  const c3 = 1714;

  function hydraulicHorsePower(gpm3, psi3) {
    return (gpm3 * psi3) / c3;
  }

  const equals3 = () => {
    const gpmValue = Number(isGpm3);
    const psiValue = Number(isPsi3);
    const hpResult = hydraulicHorsePower(gpmValue, psiValue);

    hydHPResult.innerHTML = hpResult + " HP";
  };

  // Torque (in lbs)
  if (typeof window !== "undefined") {
    const torqueResult4 = document.getElementById("torqueResult4");
  }

  const c4 = 6.28;

  function torque4(psi4, area4) {
    return (psi4 * area4) / c4;
  }

  const equals4 = () => {
    const psiValue = Number(isPsi4);
    const areaValue = Number(isArea4);
    const torque4Result = torque4(areaValue, psiValue);

    torqueResult4.innerHTML = torque4Result + " in lbs";
  };

  // Torque (in lbs)
  if (typeof window !== "undefined") {
    const torqueResult5 = document.getElementById("torqueResult5");
  }

  const c5 = 63025;

  function torque5(hp5, rpm5) {
    return (hp5 * c5) / rpm5;
  }

  const equals5 = () => {
    const hpValue = Number(isHp5);
    const rpmValue = Number(isRpm5);
    const torque5Result = torque5(hpValue, rpmValue);

    torqueResult5.innerHTML = torque5Result + " in lbs";
  };

  // Cylinder area (in²)
  if (typeof window !== "undefined") {
    const output6 = document.getElementById("output6");
  }
  const c6 = 0.7854;

  function cylArea6(dia6) {
    return Math.pow(dia6, 2) * c6;
  }

  const equals6 = () => {
    const diaValue = Number(isDia6);
    const dia6Result = cylArea6(diaValue);

    output6.innerHTML = dia6Result + " in²";
  };

  // EREA - Effected Rod End Area (in²)
  if (typeof window !== "undefined") {
    const output12 = document.getElementById("output12");
  }

  const c12 = 0.7854;

  function erea12(dia12, rod12) {
    return Math.pow(dia12, 2) * c12 - Math.pow(rod12, 2) * c12;
  }

  const equals12 = () => {
    const dia12Value = Number(isDia12);
    const rod12Value = Number(isRod12);
    const erea12Result = erea12(dia12Value, rod12Value);

    output12.innerHTML = erea12Result + " in²";
  };

  // Cyl Time (seconds)
  if (typeof window !== "undefined") {
    const output7 = document.getElementById("output7");
  }

  const c7 = 0.26;

  function cylTime7(area7, stroke7, gpm7) {
    return (area7 * stroke7 * c7) / gpm7;
  }

  const equals7 = () => {
    const areaValue = Number(isArea7);
    const strokeValue = Number(isStroke7);
    const gpmValue = Number(isGpm7);
    const cylTime7Result = cylTime7(areaValue, strokeValue, gpmValue);

    output7.innerHTML = cylTime7Result + " Seconds";
  };

  // Cyl HP
  if (typeof window !== "undefined") {
    const output8 = document.getElementById("output8");
  }

  const c8 = 33000;

  function cylHp8(cylSpeed8, cylForce8) {
    return (cylSpeed8 * cylForce8) / c8;
  }

  const equals8 = () => {
    const cylSpeedValue = Number(isCylSpeed8);
    const cylForceValue = Number(isCylForce8);
    const cylHp8Result = cylHp8(cylSpeedValue, cylForceValue);

    output8.innerHTML = cylHp8Result + " HP";
  };

  // Cyl Adj. gpm on retract
  if (typeof window !== "undefined") {
    const output9 = document.getElementById("output9");
  }

  function cylRetract9(cylArea9, gpm9, erea9) {
    return (cylArea9 * gpm9) / erea9;
  }

  const equals9 = () => {
    const cylArea9Value = Number(isCylArea9);
    const gpm9Value = Number(isGpm9);
    const erea9Value = Number(isErea9);
    const cylR9Result = cylRetract9(cylArea9Value, gpm9Value, erea9Value);

    output9.innerHTML = cylR9Result + " gpm";
  };

  // Cyl Speed (ft/min)
  if (typeof window !== "undefined") {
    const output10 = document.getElementById("output10");
  }

  const c10 = 5;

  function cylSpeed10(stroke10, time10) {
    return (stroke10 * c10) / time10;
  }

  const equals10 = () => {
    const stroke10Value = Number(isStroke10);
    const time10Value = Number(isTime10);
    const cylSpeed10Result = cylSpeed10(stroke10Value, time10Value);

    output10.innerHTML = cylSpeed10Result + " ft/min";
  };

  // Cyl Speed (ft/min)
  if (typeof window !== "undefined") {
    const output11 = document.getElementById("output11");
  }

  const c11 = 19.25;

  function cylSpeed11(gpm11, area11) {
    return (gpm11 * c11) / area11;
  }

  const equals11 = () => {
    const gpm11Value = Number(isGpm11);
    const area11Value = Number(isArea11);
    const cylSpeed11Result = cylSpeed11(gpm11Value, area11Value);

    output11.innerHTML = cylSpeed11Result + " ft/min";
  };

  return (
    <div>
      <div>
        <Head>
          <meta charSet="UTF-8" />
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
          <title>TU - Technical Union | Fluid Power Formulas | Calculator </title>

          <meta
            name="description"
            content="Fluid Power calculator | PSI, Force, GPM, Speed, etc.. fluid power calculation at your finger tips. "
          />
          <meta
            name="keywords"
            content="TU, Fluid Power, Formulas, Calculator"
          />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU " />

          <meta
            property="og:title"
            content=" Fluid Power Formulas Calculator"
          />
          <meta
            property="og:description"
            content="Interactive Fluid Power Formulas. Calculation of force, speed, pressure, etc, everything at your finger tips."
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/formulas.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/fluid-power-formulas"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU  | Fluid Power Formulas " />

          <meta
            name="twitter:description"
            content="Calculation of force, pressure, speed, rpm, HP, everything you need in fluid power calculations at your finger tips."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/formulas.png"
          />
        </Head>
      </div>
      <Script
        id="fluid-power-formulas-web-page"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Fluid Power Formulas Calculator",
            "description": "Fluid Power calculator | PSI, Force, GPM, Speed, etc.. fluid power calculation at your finger tips.",
            "url": "https://www.tu.biz/fluid-power-formulas",
            "inLanguage": "en",
            "author": {
              "@type": "Person",
              "name": "Edgar Lindo"
            },
            "publisher": {
              "@type": "Organization",
              "name": "TU",
              "url": "https://www.tu.biz",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.tu.biz/images/tu-favicon.png"
              }
            }
          }`,
        }}
      />

      <Script
        id="fluid-power-formulas-calculator"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          [
  {
    "@context": "https://schema.org",
    "@type": ["MathSolver", "LearningResource"],
    "name": "An awesome Fluid Power Formulas solver",
    "url": "https://www.tu.biz/fluid-power-formulas",
    "usageInfo": "https://www.tu.biz/fluid-power-formulas",
    "inLanguage": "en",
    "potentialAction": [{
      "@type": "SolveMathAction",
      "target": "https://www.tu.biz/fluid-power-formulas",
      "mathExpression-input": ["psi", "rpm", "hp", "area", "force", "speed", "torque"],
      "eduQuestionType": ["hydraulic equations","fluid power formulas"]
     }],
    "learningResourceType": "Math solver"
  },
  {
    "@context": "https://schema.org",
    "@type": ["MathSolver", "LearningResource"],
    "name": "Un solucionador formulas para hidráulica",
    "url": "https://www.tu.biz/fluid-power-formulas",
    "usageInfo": "https://www.tu.biz/fluid-power-formulas",
    "inLanguage": "es",
    "potentialAction": [{
      "@type": "SolveMathAction",
      "target": "https://www.tu.biz/fluid-power-formulas",
      "mathExpression-input": ["psi", "rpm", "hp", "area", "fuerza", "velocidad", "torque"],
      "eduQuestionType": ["ecuaciones hidráulicas","fórmulas de potencia de fluidos"]
     }],
    "learningResourceType": "Math solver"
  }
]
          `,
        }}
      />

      <div className="row" lang="en">
        <div className="col-md-12">
          <div className="formulas-title">
            <h1 className="fluid-power-formulas">Fluid Power Formulas</h1>
          </div>
        </div>
        <div className="col-md-6">
          <p>
            <b>Force (lbs) =</b> <br /> <br />
            <input
              type="number"
              placeholder="Pressure (psi)"
              id="pressure1"
              onChange={getVariables}
            />{" "}
            x
            <input
              type="number"
              placeholder="Area (in²)"
              id="area1"
              onChange={getVariables}
            />
            <button className="equals" id="equals1" onClick={equals}>
              =
            </button>
            <output type="number" id="forceResult"></output>
          </p>
          <br /> <hr className="linebreak" />
          <p>
            <b>Gpm =</b> <br /> <br />
            <input
              type="number"
              placeholder="rpm"
              id="rpm2"
              onChange={getVariables}
            />{" "}
            x
            <input
              type="number"
              placeholder="Displacement (in³)"
              id="displacement2"
              onChange={getVariables}
            />{" "}
            / 231
            <button className="equals" id="equals2" onClick={equals2}>
              =
            </button>
            <output type="number" id="gpmresult"></output>
          </p>
          <br /> <hr className="linebreak" />
          <p>
            <b>Hyd HP =</b> <br /> <br />
            <input
              type="number"
              placeholder="gpm"
              id="gpm3"
              onChange={getVariables}
            />{" "}
            x
            <input
              type="number"
              placeholder="Pressure (psi)"
              id="psi3"
              onChange={getVariables}
            />{" "}
            / 1,714
            <button className="equals" id="equals3" onClick={equals3}>
              =
            </button>
            <output type="number" id="hydHPResult"></output>
          </p>
          <br /> <hr className="linebreak" />
          <p>
            <b>Torque (in lbs) =</b> <br /> <br />
            <input
              type="number"
              placeholder="Pressure (psi)"
              id="psi4"
              onChange={getVariables}
            />{" "}
            x
            <input
              type="number"
              placeholder="Area (in³)"
              id="area4"
              onChange={getVariables}
            />{" "}
            / 6.28
            <button className="equals" id="equals4" onClick={equals4}>
              =
            </button>
            <output type="number" id="torqueResult4"></output>
          </p>
          <br /> <hr className="linebreak" />
          <p>
            <b>Torque (in lbs) =</b> <br /> <br />
            <input
              type="number"
              placeholder="HP"
              id="hp5"
              onChange={getVariables}
            />{" "}
            x 63,025 /
            <input
              type="number"
              placeholder="rpm"
              id="rpm5"
              onChange={getVariables}
            />
            <button className="equals" id="equals5" onClick={equals5}>
              =
            </button>
            <output type="number" id="torqueResult5"></output>
          </p>
          <br /> <hr className="linebreak" />
          <p>
            <b>Cylinder area (in²) =</b> <br /> <br />
            <input
              type="number"
              placeholder="Diameter (in)"
              id="dia6"
              onChange={getVariables}
            />{" "}
            ² x .7854
            <button className="equals" id="equals6" onClick={equals6}>
              =
            </button>
            <output type="number" id="output6"></output>
          </p>
          <br /> <hr className="linebreak" />
        </div>
        <div className="col-md-6">
          <p>
            <b>EREA - Effected Rod End Area (in²) =</b> <br /> <br />
            <input
              type="number"
              placeholder=" Cyl. Dia. (in)"
              id="dia12"
              onChange={getVariables}
            />{" "}
            ² x .7854 -
            <input
              type="number"
              placeholder=" Rod Dia. (in)"
              id="rod12"
              onChange={getVariables}
            />{" "}
            ² x.7854
            <button className="equals" id="equals12" onClick={equals12}>
              =
            </button>
            <output type="number" id="output12"></output>
          </p>
          <br /> <hr className="linebreak" />
          <p>
            <b>Cyl Time (seconds) =</b> <br /> <br />
            <input
              type="number"
              placeholder="Area (in²)"
              id="area7"
              onChange={getVariables}
            />{" "}
            x
            <input
              type="number"
              placeholder="Stroke (in)"
              id="stroke7"
              onChange={getVariables}
            />{" "}
            x .26 /
            <input
              type="number"
              placeholder="gpm"
              id="gpm7"
              onChange={getVariables}
            />
            <button className="equals" id="equals7" onClick={equals7}>
              =
            </button>
            <output type="number" id="output7"></output>
          </p>
          <br /> <hr className="linebreak" />
          <p>
            <b>Cyl HP =</b>
            <br /> <br />
            <input
              type="number"
              placeholder="Cyl. Speed (ft/min)"
              id="cylSpeed8"
              onChange={getVariables}
            />{" "}
            x
            <input
              type="number"
              placeholder="Cyl. Force (lbs.)"
              id="cylForce8"
              onChange={getVariables}
            />{" "}
            / 33,000
            <button className="equals" id="equals8" onClick={equals8}>
              =
            </button>
            <output type="number" id="output8"></output>
          </p>
          <br /> <hr className="linebreak" />
          <p>
            <b>Cyl Adj. gpm on retract =</b> <br /> <br />
            <input
              type="number"
              placeholder="Cyl. Area (in²)"
              id="cylArea9"
              onChange={getVariables}
            />{" "}
            x
            <input
              type="number"
              placeholder="gpm"
              id="gpm9"
              onChange={getVariables}
            />{" "}
            /
            <input
              type="number"
              placeholder="EREA (in²)"
              id="erea9"
              onChange={getVariables}
            />
            <button className="equals" id="equals9" onClick={equals9}>
              =
            </button>
            <output type="number" id="output9"></output>
          </p>
          <br /> <hr className="linebreak" />
          <p>
            <b>Cyl Speed (ft/min) =</b>
            <br /> <br />
            <input
              type="number"
              placeholder="Stroke (in)"
              id="stroke10"
              onChange={getVariables}
            />{" "}
            x 5 /
            <input
              type="number"
              placeholder="Time (seconds)"
              id="time10"
              onChange={getVariables}
            />
            <button className="equals" id="equals10" onClick={equals10}>
              =
            </button>
            <output type="number" id="output10"></output>
          </p>
          <br /> <hr className="linebreak" />
          <p>
            <b>Cyl Speed (ft/min) =</b> <br /> <br />
            <input
              type="number"
              placeholder="gpm"
              id="gpm11"
              onChange={getVariables}
            />{" "}
            x 19.25 /
            <input
              type="number"
              placeholder="Cyl. Area (in²)"
              id="area11"
              onChange={getVariables}
            />
            <button className="equals" id="equals11" onClick={equals11}>
              =
            </button>
            <output type="number" id="output11"></output>
          </p>
          <br /> <hr className="linebreak" />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Formulas;
