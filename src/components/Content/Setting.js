import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import LinearProgress from "@mui/material/LinearProgress";

import { logout } from "../../firebase";
import { useGetData } from "../../api";

const DetailHeader = styled(Typography)`
  padding: 0px 0px 0px 10px;
  font-size: 15px;
`;

const DetailContent = styled(Typography)`
  padding: 0px 0px 0px 20px;
  font-size: 14px;
`;

function Setting(props) {
  const { userName, photoUrl, uid } = props;
  const { data, loading } = useGetData("/order/" + uid);

  const handleStatusColor = (status) => {
    switch (status) {
      case 1:
        return "#C6633C";
      case 2:
        return "#21b6ae";
      case 3:
        return "#7D7272";
      default:
        return "#3C86C6";
    }
  };

  const handleStatusText = (status) => {
    switch (status) {
      case 1:
        return "In Transit";
      case 2:
        return "Completed";
      case 3:
        return "Canceled";
      default:
        return "In Process";
    }
  };

  return (
    <>
      <Typography variant="h5" gutterBottom style={{ color: "white" }}>
        Settings
      </Typography>
      {loading && <LinearProgress />}
      <div style={{ width: "100%", height: "calc(100% - 56px)", overflow: "auto" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", justifyContent: "start", alignItems: "center", flex: 1 }}>
            <Avatar alt={userName} src={photoUrl} style={{ width: 56, height: 56 }} />
            <Typography style={{ color: "white", marginLeft: 10 }} variant="h6">
              {userName}
            </Typography>
          </div>

          <div style={{ display: "flex", justifyContent: "end", alignItems: "center", flex: 1, marginRight: 10 }}>
            <Button variant="contained" endIcon={<LogoutIcon />} style={{ backgroundColor: "#E14949" }} onClick={() => logout()}>
              Log Out
            </Button>
          </div>
        </div>
        <Divider light style={{ borderTop: "1px solid white", margin: "15px 0px" }} />
        <Typography variant="h5" gutterBottom style={{ color: "white" }}>
          Order History
        </Typography>
        <Divider light style={{ borderTop: "1px solid white", margin: "15px 0px" }} />
        <Stack spacing={2} style={{ marginRight: 10 }}>
          {Object.entries(data).map(([key, value]) => (
            <div style={{ width: "100%", height: "100%", backgroundColor: "white", borderRadius: 5 }} key={key}>
              <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                <DetailHeader variant="button" display="block" style={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center" }}>
                  Order ID: {key}
                </DetailHeader>
                <div style={{ flex: 1, display: "flex", justifyContent: "end", alignItems: "center", marginRight: 10 }}>
                  <Button variant="contained" disableRipple style={{ backgroundColor: handleStatusColor(value[0].status) }}>
                    Status: {handleStatusText(value[0].status)}
                  </Button>
                </div>
              </div>
              <Divider light={false} style={{ borderTop: "1px solid white", margin: "15px 0px" }} />
              <DetailHeader variant="button" display="block">
                Order Detail:
              </DetailHeader>
              {value.map((val) => (
                <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                  <DetailContent variant="overline" display="block" style={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center" }}>
                    {val.name}
                  </DetailContent>
                  <div style={{ flex: 1, display: "flex", justifyContent: "end", alignItems: "center", marginRight: 10 }}>
                    x {val.stock} - $ {val.price}
                  </div>
                </div>
              ))}
              <Divider light={false} style={{ borderTop: "1px solid white", margin: "15px 0px" }} />
              <div style={{ display: "flex", flexDirection: "row", margin: "10px 0px" }}>
                <DetailHeader variant="button" display="block" style={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center" }}>
                  Total:
                </DetailHeader>
                <div style={{ flex: 1, display: "flex", justifyContent: "end", alignItems: "center", marginRight: 10 }}>
                  <DetailHeader variant="button" display="block" style={{ fontSize: 18 }}>
                    $ {value.reduce((acc, cur) => acc + cur.price, 0)}
                  </DetailHeader>
                </div>
              </div>
            </div>
          ))}
        </Stack>
      </div>
    </>
  );
}

export default Setting;
