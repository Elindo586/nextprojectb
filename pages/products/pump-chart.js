import React from "react";

const PumpChart = () => {
  return (
    <div>
      <div className="col-md-9">
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th colSpan="3" className="a10-table-title">
                High Pressure Pumps
              </th>
            </tr>
            <tr className="inside-table-text">
              <td rowSpan="3">
                Pressure <br /> (psi)
              </td>
              <td>L20</td>
              <td>H20</td>
            </tr>
            <tr className="inside-table-text">
              <td>
                {" "}
                Pistons <br /> 7
              </td>
              <td>
                {" "}
                Pistons <br /> 7
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="pressure-piston-pump-rpm">
                GPM at 1,800 RPM
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="inside-table-text">
              <td>0</td>
              <td>1.4</td>
              <td>1.05</td>
            </tr>

            <tr className="inside-table-text">
              <td>1,000</td>
              <td>1.35</td>
              <td>0.98</td>
            </tr>
            <tr className="inside-table-text">
              <td>2,000</td>
              <td>1.30</td>
              <td>0.92</td>
            </tr>
            <tr className="inside-table-text">
              <td>3,000</td>
              <td>1.25</td>
              <td>0.89</td>
            </tr>
            <tr className="inside-table-text">
              <td>4,000</td>
              <td>1.22*</td>
              <td>0.86</td>
            </tr>
            <tr className="inside-table-text">
              <td>5,000</td>
              <td>1.20*</td>
              <td>0.83</td>
            </tr>
            <tr className="inside-table-text">
              <td>6,000</td>
              <td></td>
              <td>0.79</td>
            </tr>
            <tr className="inside-table-text">
              <td>7,000</td>
              <td></td>
              <td>0.75*</td>
            </tr>
            <tr className="inside-table-text">
              <td>8,000</td>
              <td></td>
              <td>0.73*</td>
            </tr>
            <tr className="inside-table-text">
              <td>9,000</td>
              <td></td>
              <td>0.70*</td>
            </tr>
            <tr className="inside-table-text">
              <td>10,000</td>
              <td></td>
              <td>0.67*</td>
            </tr>
            <tr>
              <td colSpan="3">* intermittent</td>
            </tr>
          </tbody>
        </table>
        <br /> <br />
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th colSpan="4" className="a10-table-title">
                High Pressure Pumps
              </th>
            </tr>
            <tr className="inside-table-text">
              <td rowSpan="3">
                Pressure <br /> (psi)
              </td>
              <td>L80</td>
              <td>M80</td>
              <td>H80</td>
            </tr>
            <tr className="inside-table-text">
              <td>
                {" "}
                Pistons <br /> 7
              </td>
              <td>
                {" "}
                Pistons <br /> 7
              </td>
              <td>
                {" "}
                Pistons <br /> 7
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="pressure-piston-pump-rpm">
                GPM at 1,800 RPM
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="inside-table-text">
              <td>0</td>
              <td>6.10</td>
              <td>4</td>
              <td>2.50</td>
            </tr>

            <tr className="inside-table-text">
              <td>1,000</td>
              <td>5.80</td>
              <td>3.70</td>
              <td>2.30</td>
            </tr>
            <tr className="inside-table-text">
              <td>2,000</td>
              <td>5.60</td>
              <td>3.50</td>
              <td>2.20</td>
            </tr>
            <tr className="inside-table-text">
              <td>3,000</td>
              <td>5.40*</td>
              <td>3.40</td>
              <td>2.10</td>
            </tr>
            <tr className="inside-table-text">
              <td>4,000</td>
              <td></td>
              <td>3.20*</td>
              <td>2.00</td>
            </tr>
            <tr className="inside-table-text">
              <td>5,000</td>
              <td></td>
              <td>3.10*</td>
              <td>1.90</td>
            </tr>
            <tr className="inside-table-text">
              <td>6,000</td>
              <td></td>
              <td></td>
              <td>1.85</td>
            </tr>
            <tr className="inside-table-text">
              <td>7,000</td>
              <td></td>
              <td></td>
              <td>1.80*</td>
            </tr>
            <tr className="inside-table-text">
              <td>8,000</td>
              <td></td>
              <td></td>
              <td>1.75*</td>
            </tr>
            <tr className="inside-table-text">
              <td>9,000</td>
              <td></td>
              <td></td>
              <td>1.70*</td>
            </tr>
            <tr className="inside-table-text">
              <td>10,000</td>
              <td></td>
              <td></td>
              <td>1.65*</td>
            </tr>
            <tr>
              <td colSpan="4">* intermittent</td>
            </tr>
          </tbody>
        </table>
        <br /> <br />
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th colSpan="4" className="a10-table-title">
                High Pressure Pumps
              </th>
            </tr>
            <tr className="inside-table-text">
              <td rowSpan="3">
                Pressure <br /> (psi)
              </td>
              <td>L80</td>
              <td>M80</td>
              <td>H80</td>
            </tr>
            <tr className="inside-table-text">
              <td>
                {" "}
                Pistons <br /> 14
              </td>
              <td>
                {" "}
                Pistons <br /> 14
              </td>
              <td>
                {" "}
                Pistons <br /> 14
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="pressure-piston-pump-rpm">
                GPM at 1,200 RPM
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="inside-table-text">
              <td>100</td>
              <td>6.70</td>
              <td>8.20</td>
              <td>12.80</td>
            </tr>
            <tr className="inside-table-text">
              <td>1,000</td>
              <td>6.50</td>
              <td>7.80</td>
              <td>12.40</td>
            </tr>
            <tr className="inside-table-text">
              <td>2,000</td>
              <td>6.20</td>
              <td>7.50</td>
              <td>12.00</td>
            </tr>
            <tr className="inside-table-text">
              <td>3,000</td>
              <td>6.90</td>
              <td>7.20</td>
              <td>11.50</td>
            </tr>
            <tr className="inside-table-text">
              <td>4,000</td>
              <td>5.70*</td>
              <td>6.90</td>
              <td>11.00</td>
            </tr>
            <tr className="inside-table-text">
              <td>5,000</td>
              <td>5.50*</td>
              <td>6.60</td>
              <td>10.50</td>
            </tr>
            <tr className="inside-table-text">
              <td>6,000</td>
              <td>5.40*</td>
              <td>6.20*</td>
              <td>10.10*</td>
            </tr>
            <tr className="inside-table-text">
              <td>7,000</td>
              <td></td>
              <td>6.00*</td>
              <td>9.70*</td>
            </tr>
            <tr className="inside-table-text">
              <td>8,000</td>
              <td></td>
              <td>5.60*</td>
              <td>9.30*</td>
            </tr>
            <tr className="inside-table-text">
              <td>9,000</td>
              <td></td>
              <td>5.30*</td>
              <td>8.90*</td>
            </tr>
            <tr className="inside-table-text">
              <td>10,000</td>
              <td></td>
              <td>5.00*</td>
              <td>8.50*</td>
            </tr>
            <tr>
              <td colSpan="4">* intermittent</td>
            </tr>
          </tbody>
        </table>
        <br /> <br />
      </div>
    </div>
  );
};
export default PumpChart;
