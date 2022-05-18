import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Input } from "@mui/material";

import HistoryIcon from "@material-ui/icons/History";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { border, width } from "@mui/system";
import Modal from "../component/Modal";
import Option_but from "../component/Option_but";

export default function Alerts() {
  // const open =document.getElementById('open')
  // const modal_cont =document.getElementById('model_cont')
  // const close =document.getElementById('close')
  // open.addEventListener('click',()=>{
  //     modal_cont.classList.add('show')
  // })
  // close.addEventListener('click',()=>{
  //     modal_cont.classList.revome('show')
  // })
  return (
    <>
      <CssBaseline />

      <Container
        style={{
          backgroundColor: "#EEEEEE",
          height: "93vh",
          width: "175vh",
          marginLeft: "41vh",
          marginTop: "10vh",
          borderRadius: "15px 15px 0px 0px",
          paddingTop: "0px"
        }}
      >
        <div style={{ display: "flex" }}>
          <h3 className=" " style={{ marginRight: "45%", display: "inline" }}>
            ALERT ID:
          </h3>
          <HistoryIcon style={{ paddingTop: "8px" }} />
          <p className="user_inpu box" style={{ marginRight: "2%" }}>
            <strong>Suppression History</strong>
          </p>
          <p className="user_inpu box" style={{ marginRight: "2%" }}>
            <strong>Options</strong>
          </p>

          <div
            style={{
              height: "0.1%",
              width: "5%",
              display: "inline",
              borderRadius: "50px",
              border: "1px solid black",
              marginTop: "1%",
              padding: "0px",
              marginRight: "2%"
            }}
          >
            <Option_but />
          </div>
          {/* <button  id=''className='acco-but' style={{borderRadius:'10px',backgroundColor:'#F9A980',border:'none',height:'30px',width:'80px'}}>SUBMIT</button>  */}
          <Modal />

          {/* <div className="acco" id=''>
                   <div className="acc_con">
                       <h1>hi helloswewdwfef</h1>
                   </div>
               </div> */}
        </div>
        <form className="user_inpu">
          <div className="user_input ">
            <label style={{ fontSize: "11px" }}>AI DECISION</label>
            <br />
            <Input
              type="text"
              id="ai_decision"
              name="ai_decision"
              style={{
                backgroundColor: "white",
                border: "1.5px solid black",
                padding: "0px",
                borderRadius: "5px",
                width: "250px"
              }}
            ></Input>
          </div>
          <div className="user_input">
            <label for="user" style={{ fontSize: "11px" }}>
              FINAL DECISION
            </label>
            <br />

            <select
              name="final"
              id="final"
              style={{
                backgroundColor: "white",
                border: "1.5px solid black",
                padding: "0px",
                borderRadius: "5px",
                width: "250px",
                height: "35px"
              }}
            >
              <option value="False positive">False positive</option>
              <option value="True match">True match</option>
            </select>
          </div>
          <div className="user_input">
            <label style={{ fontSize: "11px" }}>REASON</label>
            <br />
            <select
              name="mismatch"
              id="mismatch"
              style={{
                backgroundColor: "white",
                border: "1.5px solid black",
                padding: "0px",
                borderRadius: "5px",
                width: "250px",
                height: "35px"
              }}
            >
              <option value="Employment/location mismatch">
                Employment/location mismatch
              </option>
              <option value="Name mismatch ">Name mismatch </option>
              <option value="SSN mismatch">SSN mismatch</option>
              <option value="Reported violations ">Reported violations </option>
            </select>
          </div>
        </form>
        <br />
        <br />
        {/* <hr/> */}

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            className="cont "
            style={{
              height: "0px",
              borderTop: "3px solid #C5C5C5",
              display: "",
              float: "left"
            }}
          >
            <h4 className="hed" style={{ marginTop: "0px" }}>
              CUSTOMER INFORMATION
            </h4>
          </div>
          <div
            className="cont"
            style={{
              height: "40px",
              borderTop: "3px solid #C5C5C5",
              borderLeft: "3px solid #C5C5C5",
              display: "",
              float: "right"
            }}
          >
            <h4 className="hed" style={{ marginTop: "0px" }}>
              WATCHLIST INFORMATION
            </h4>
          </div>
        </div>

        <div
          style={{
            marginTop: "0.5%",
            width: "100%",
            height: "25px",
            border: "1px solid black",
            backgroundColor: "#FFFFFF"
          }}
        ></div>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            className="cont "
            style={{
              flexBasis: "100%",
              height: "50vh",
              float: "left",
              overflowX: "scroll",
              marginTop: "5px"
            }}
          >
            <table style={{ margin: "", width: "100%" }}>
              <tr className="trow">
                <td className="siz bol tdata">Customer Name</td>
                <td className="siz bol alin tdata">Bob john Mariowe</td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">Date of Birth</td>
                <td className="siz bol alin tdata">7-14-1991</td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">Gender</td>
                <td className="siz bol alin tdata">Male</td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">Address</td>
                <td className="siz bol alin tdata">
                  26 Hopkins Boulebard, Boston, 02111...
                </td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">Location</td>
                <td className="siz bol alin tdata">USA</td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">Nationality</td>
                <td className="siz bol alin tdata">British</td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">SSN Number</td>
                <td className="siz bol alin tdata">908765321</td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">Age as on date</td>
                <td className="siz bol alin tdata">56</td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">A/C Number</td>
                <td className="siz bol alin tdata">5365897611000</td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">Social Media</td>
                <td className="siz bol alin tdata">Facebook</td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">Known Associates</td>
                <td className="siz bol alin tdata">writer</td>
              </tr>
              <tr className="trow">
                <td className="siz bol tdata">Known Violations</td>
                <td className="siz bol alin tdata">accident</td>
              </tr>
            </table>
          </div>
          <div
            className="cont "
            style={{
              flexBasis: "100%",
              height: "50vh",
              float: "left",
              overflowX: "hidden",
              marginTop: "5px"
            }}
          >
            <table style={{ margin: "", width: "100%" }}>
              <tr className="trow">
                <td className="siz bol alin tdata">Bob john Mariowe</td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">7-14-1991</td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">Male</td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">
                  26 Hopkins Boulebard, Boston, 02111
                </td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">USA</td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">British</td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">908765321</td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">56</td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">5365897611000</td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">Facebook</td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">writer</td>
              </tr>
              <tr className="trow">
                <td className="siz bol alin tdata">accident</td>
              </tr>
            </table>
          </div>
        </div>
        {/* <div className='img0' style={{marginBottom:'150px'}}>
                    <img src='lexi.png' style={{height:'35px',width:'150px',marginTop:'125px',marginBottom:'150px'}} />
                </div> */}
      </Container>

      {document.querySelectorAll(".acco_but").forEach((button) => {
        button.addEventListener("click", () => {
          const accordionContent = button.nextElementSibling;
          button.classList.toggle("acco_but--active");
          if (button.classList.contains("acco_but--active")) {
            accordionContent.style.maxHeight =
              accordionContent.scrollHeight + "px";
          } else {
            accordionContent.style.maxHeight = 0;
          }
        });
      })}
    </>
  );
}
