import Modal from "react-modal";
import React, { Component } from "react";
import { useState } from "react";
import { height } from "@mui/system";
import { Transform } from "@material-ui/icons";
import Lex_but from "../component/Lex_but";
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined";
// Modal.setAppElement("#root");
export default function Modal1() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div style={{ display: "inline" }}>
      {/*  */}
      <button
        onClick={() => setModalIsOpen(true)}
        style={{
          borderRadius: "10px",
          backgroundColor: "#F9A980",
          border: "none",
          height: "30px",
          width: "80px",
          cursor: "pointer",
          marginTop: "1em"
        }}
      >
        Submit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          //   overlay: { backgroundColor: "gray" },
          content: {
            boxSizing: "border-box",
            position: "relative",
            width: "350px",
            height: "520px",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #f9a980",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "10px",
            outline: "none",
            marginLeft: "90vh",
            marginTop: "",
            paddingTop: "0px"
          }
        }}
      >
        <div className="ModalPopUp" style={{}}>
          <div style={{}}></div>
        </div>
        <div
          className="modal_ele point"
          style={{ marginLeft: "100%" }}
          onClick={() => setModalIsOpen(false)}
        >
          <h3 className="modal_ele">X</h3>
        </div>
        <div className="bol" style={{ marginLeft: "30%", fontSize: "14px" }}>
          SUPPRESS ALERT?
        </div>
        <div className="modal_el">
          <input
            style={{ marginLeft: "33%" }}
            type="checkbox"
            name="choice"
          ></input>
          <label style={{ marginLeft: "10px" }}>YES</label>
          <input
            style={{ marginLeft: "30px" }}
            type="checkbox"
            name="choice"
          ></input>
          <label style={{ marginLeft: "10px" }}>NO</label>
          <div
            style={{
              backgroundColor: "#514557",
              height: "40px",
              width: "120px",
              marginTop: "20px"
            }}
          >
            <h5
              style={{
                fontSize: "10px",
                textAlign: "center",
                color: "white",
                paddingTop: "15px"
              }}
            >
              DOCUMENTATION
            </h5>
          </div>
          <div style={{ fontSize: "10px", border: "1px solid black" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            mollitia sed aspernatur nihil corrupti natus vero? Amet at tempore
            dicta officiis, quis commodi cupiditate, beatae iure minima eveniet
            inventore ab? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cupiditate mollitia sed aspernatur nihil corrupti natus vero?
            Amet at tempore dicta officiis, quis commodi cupiditate, beatae iure
            minima eveniet inventore ab?
          </div>
          <p style={{ fontSize: "10px", display: "inline" }}>Attach Files</p>
          <div style={{ marginLeft: "10px", display: "inline" }}>
            <AttachmentOutlinedIcon
              fontSize="small"
              style={{ paddingTop: "8px" }}
            />
          </div>
          <div style={{ textAlign: "center", fontSize: "10px" }}>
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>
              select Suppression End-Date
            </p>
            {/* <img src='date.png' style={{height:'170px',width:'170px'}} /> */}
            <Lex_but />
            <button
              onClick={() => setModalIsOpen(false)}
              style={{
                backgroundColor: "#F9A980",
                border: "none",
                height: "30px",
                width: "80px",
                cursor: "pointer",
                display: "block",
                fontSize: "9px",
                fontWeight: "bold",
                marginLeft: "38%",
                marginTop: "10px"
              }}
            >
              CONFIRM
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
