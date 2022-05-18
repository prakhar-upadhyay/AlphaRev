import { dividerClasses, Typography } from "@mui/material";
import React from "react";

export default function SideMenu() {
  return (
    <>
      <div className="side-menu">
        <p>
          <strong className="font"></strong>
        </p>
        <a href="/" className="li font pet">
          DASHBOARD
        </a>
        <div className="lin">
          <div className="gap">
            <a href="review_alert" className="li font">
              TRUE MATCH
            </a>
          </div>
          <div className="gap">
            <a href="review_alert" className="li font">
              FALSE POSITIVES
            </a>
          </div>
          <div className="gap">
            <a href="review_alert" className="li font">
              PENDING ANALYST REVIEW
            </a>
          </div>
          <div className="gap">
            {" "}
            <a href="review_alert" className="li font">
              REVIEWED ALERTS
            </a>
          </div>
          <div className="gap">
            <a href="review_alert" className="li font">
              CONTACT/SUPPORT
            </a>
          </div>
        </div>
        <div className="img1">
          <img
            src="alfa.PNG"
            alt="alfa"
            style={{ height: "120px", width: "120px" }}
          />
        </div>
      </div>
    </>
  );
}
