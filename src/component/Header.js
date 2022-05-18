import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Grid,
  CssBaseline
} from "@mui/material";
import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import PersonIcon from "@material-ui/icons/Person";
import FormatIndentDecreaseIcon from "@material-ui/icons/FormatIndentDecrease";
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
export default function Header() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#4d4f5c",
        height: "55px",
        paddingTop: "0px",
        marginTop: "0px"
      }}
    >
      <Toolbar style={{ paddingTop: "0px", marginTop: "0px" }}>
        <Grid container style={{ paddingTop: "0px", marginTop: "0px" }}>
          <Grid item sm={8} xs={2}>
            <FormatIndentDecreaseIcon />
          </Grid>

          <Grid item style={{ margintop: "0px", paddingTop: "0px" }}>
            <IconButton>
              <div
                style={{
                  backgroundColor: "#F9A980",
                  height: "25px",
                  width: "25px",
                  borderRadius: "4px 0px 0px 4px"
                }}
              >
                <FilterListIcon
                  fontSize="small"
                  style={{ paddingTop: "3px" }}
                />
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  height: "25px",
                  width: "180px",
                  paddingBottom: "10px"
                }}
              >
                <InputBase placeholder="" />
              </div>
              <div
                style={{
                  backgroundColor: "#F9A980",
                  height: "25px",
                  width: "25px",
                  marginLeft: "0px",
                  borderRadius: "0px 4px 4px 0px"
                }}
              >
                <SearchOutlinedIcon
                  fontSize="small"
                  style={{ paddingTop: "3px" }}
                />
              </div>
            </IconButton>

            <IconButton
              style={{
                backgroundColor: "#F9A980",
                height: "25px",
                width: "25px",
                marginLeft: "30px"
              }}
            >
              <PersonIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
