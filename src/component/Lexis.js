import React, { useState } from "react";

export default function Lexis() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="acco">
        <button
          onClick={() => setShow(!show)}
          className="acco_but"
          style={{
            border: "none",
            backgroundColor: "#4d4f5c",
            marginLeft: "42vh",
            marginTop: "10vh",
            cursor: "pointer",
            borderBottom: "4px solid #4d4f5c",
            borderRadius: "8px 8px 0px 0px"
          }}
        >
          {" "}
          <img
            src="le.PNG"
            alt="lex"
            style={{
              height: "35px",
              width: "150px",
              marginTop: "0px",
              marginBottom: "0px"
            }}
          />
        </button>
        {show && (
          <div
            className="acc_con"
            style={{
              border: "none",
              backgroundColor: "#FAFAFA",
              marginLeft: "42vh"
            }}
          >
            <div
              style={{
                backgroundColor: "#4d4f5c",
                height: "25px",
                width: "97%"
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  color: "white",
                  marginTop: "0px",
                  paddingTop: "5px",
                  width: "97%"
                }}
              >
                &emsp;&emsp;customer Information &emsp; Judicial/Litigation Case
                &emsp; Social Media &emsp; EmploymentInformation &emsp;
                Associated Family &emsp; Bankruptcy Filling Information
              </p>
            </div>
            <div
              className=""
              style={{ height: "30vh", overflowX: "scroll", width: "97%" }}
            >
              <table style={{ margin: "", width: "55%" }}>
                <tr>
                  <td className="siz bol">Customer Name</td>
                  <td className="siz bol alin">Bob john Mariowe</td>
                </tr>
                <tr>
                  <td className="siz bol">Date of Birth</td>
                  <td className="siz bol alin">7-14-1991</td>
                </tr>
                <tr>
                  <td className="siz bol">Gender</td>
                  <td className="siz bol alin">Male</td>
                </tr>
                <tr>
                  <td className="siz bol">Address</td>
                  <td className="siz bol alin">
                    hbjhdwbjhbjhdwjh jhebjhwb jhbehj
                  </td>
                </tr>
                <tr>
                  <td className="siz bol">Location</td>
                  <td className="siz bol alin">usa</td>
                </tr>
                <tr>
                  <td className="siz bol">Customer Name</td>
                  <td className="siz bol alin"></td>
                </tr>
                <tr>
                  <td className="siz bol">Customer Name</td>
                  <td className="siz bol alin"></td>
                </tr>
                <tr>
                  <td className="siz bol">Customer Name</td>
                  <td className="siz bol alin">Bob john Mariowe</td>
                </tr>
                <tr>
                  <td className="siz bol">Date of Birth</td>
                  <td className="siz bol alin">7-14-1991</td>
                </tr>
                <tr>
                  <td className="siz bol">Gender</td>
                  <td className="siz bol alin">Male</td>
                </tr>
                <tr>
                  <td className="siz bol">Address</td>
                  <td className="siz bol alin">
                    hbjhdwbjhbjhdwjh jhebjhwb jhbehj
                  </td>
                </tr>
                <tr>
                  <td className="siz bol">Location</td>
                  <td className="siz bol alin">usa</td>
                </tr>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
