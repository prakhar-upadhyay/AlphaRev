import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "inline", width: "5px", borderRadius: "50px" }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ height: "2px" }}
      >
        <MoreVertIcon fontSize="small" style={{ paddingTop: "3px" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <div className="item1">
          <MenuItem className="item" onClick={handleClose}>
            Alert Suppression
          </MenuItem>
        </div>

        <div className="item1">
          <MenuItem className="item" onClick={handleClose}>
            Audit Trial
          </MenuItem>
        </div>
        <div className="item1">
          <MenuItem className="item" onClick={handleClose}>
            Watchlist Screenshot
          </MenuItem>
        </div>
        <div className="item1">
          <MenuItem className="item" onClick={handleClose}>
            Lexis Nexis .PDF
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
