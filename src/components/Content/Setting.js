import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

function Setting(props) {
  const { userName, photoUrl } = props;
  return (
    <>
      <Typography variant="h5" gutterBottom style={{ color: "white" }}>
        Settings
      </Typography>
      <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
        <Avatar alt={userName} src={photoUrl} style={{ width: 56, height: 56 }} />
        <Typography style={{ color: "white", marginLeft: 10 }} variant="h6">
          {userName}
        </Typography>
      </div>
      <Divider light style={{ borderTop: "1px solid white", margin: "15px 0px" }} />

      <Typography variant="h5" gutterBottom style={{ color: "white" }}>
        Order History
      </Typography>
    </>
  );
}

export default Setting;
