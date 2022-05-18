import { dividerClasses, Typography } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

export default function Alert() {
  return (
    <>
      <div className="alt" style={{ boxShadow: "15px black" }}>
        <div className="alerts1" style={{ borderLeft: "5px solid #E7CBBD" }}>
          <h3
            style={{ fontSize: "12px", marginLeft: "30px", marginTop: "20px" }}
          >
            NEW ALERTS PROCESSED BY AI ENGINE
          </h3>

          <div className="im3">
            <img
              src="pend.PNG"
              alt="pend"
              style={{
                height: "100px",
                width: "80px",
                marginLeft: "25px",
                marginTop: "40px",
                float: "left"
              }}
            />
            <h5
              style={{
                width: "250px",
                marginLeft: "110px",
                paddingTop: "40px",
                fontStyle: "10px",
                marginBottom: "5px"
              }}
            >
              <strong>ALERTS PENDING MANUAL REVIEW</strong>
            </h5>
            <p
              style={{
                width: "163px",
                marginLeft: "8px",
                fontSize: "9px",
                marginTop: "0px",
                display: "inline"
              }}
            >
              TOTAL ALERTS PENDING MANUAL REVIEW:
            </p>
            <p
              style={{
                width: "13px",
                display: "inline",
                fontSize: "10px",
                color: "#e8da12"
              }}
            >
              <strong>20</strong>
            </p>

            <button
              style={{
                fontSize: "12px",
                background: "#F9A980",
                border: "none",
                height: "25px",
                width: "80px",
                borderRadius: "10px",
                marginTop: "10px"
              }}
            >
              review
            </button>
          </div>
          <div style={{ display: "inline", width: "20px" }}></div>
        </div>
        <div className="alerts">
          <div className="im3">
            <img
              src="false.PNG"
              alt="pend"
              style={{
                height: "100px",
                width: "80px",
                marginLeft: "25px",
                marginTop: "40px",
                float: "left"
              }}
            />
            <h5
              style={{
                width: "250px",
                marginLeft: "110px",
                paddingTop: "40px",
                fontStyle: "10px",
                marginBottom: "5px"
              }}
            >
              <strong>FALSE POSITIVES</strong>
            </h5>
            <p
              style={{
                width: "163px",
                marginLeft: "8px",
                fontSize: "9px",
                marginTop: "0px",
                display: "inline"
              }}
            >
              TOTAL"FALSE POSITIVE"ALERTS:
            </p>
            <p
              style={{
                width: "13px",
                display: "inline",
                fontSize: "10px",
                color: "#e8da12",
                marginRight: "50px"
              }}
            >
              <strong>70</strong>
            </p>
            <button
              style={{
                fontSize: "12px",
                background: "#F9A980",
                border: "none",
                height: "25px",
                width: "80px",
                borderRadius: "10px",
                marginTop: "10px"
              }}
            >
              review
            </button>
          </div>

          <div className="im4">
            <img
              src="false.PNG"
              alt="pend"
              style={{
                height: "100px",
                width: "80px",
                marginLeft: "0 px",
                marginTop: "40px",
                float: "left"
              }}
            />
            <h5
              style={{
                width: "250px",
                marginLeft: "40px",
                paddingTop: "40px",
                fontStyle: "10px",
                marginBottom: "5px"
              }}
            >
              <strong>TRUE MATCH</strong>
            </h5>
            <p
              style={{
                width: "163px",
                marginLeft: "8px",
                fontSize: "9px",
                marginTop: "0px",
                display: "inline"
              }}
            >
              TOTAL "TRUE MATCH"ALERTS:
            </p>
            <p
              style={{
                width: "13px",
                display: "inline",
                fontSize: "10px",
                color: "#F065A3"
              }}
            >
              <strong>10</strong>
            </p>
            <button
              style={{
                fontSize: "12px",
                background: "#F9A980",
                border: "none",
                height: "25px",
                width: "80px",
                borderRadius: "10px",
                marginTop: "10px"
              }}
            >
              review
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
