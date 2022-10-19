import "./HelpButtons.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";

const HelpButtons = () => {
  return (
    <>
      <div className="search-box">
        <TextField
          id="standard-search"
          label="Search here"
          type="search"
          variant="standard"
        />
      </div>
      <div className="btn-one">
        <h3>
          Get Help{" "}
          <div className="help-icon">
            <ContactSupportOutlinedIcon />
          </div>
        </h3>
      </div>

      <div className="btn-two">
        <h3>
          Contact Us{" "}
          <div className="contact-us-icon">
            <PermPhoneMsgRoundedIcon />
          </div>
        </h3>
      </div>
    </>
  );
};

export default HelpButtons;
