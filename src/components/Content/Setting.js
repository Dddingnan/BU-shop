import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";

const DetailHeader = styled(Typography)`
  padding: 0px 0px 0px 10px;
  font-size: 15px;
`;

const DetailContent = styled(Typography)`
  padding: 0px 0px 0px 20px;
  font-size: 14px;
`;

function Setting(props) {
  const { userName, photoUrl } = props;
  return (
    <>
      <Typography variant="h5" gutterBottom style={{ color: "white" }}>
        Settings
      </Typography>
      <div style={{ width: "100%", height: "calc(100% - 56px)", overflow: "auto" }}>
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
        <Divider light style={{ borderTop: "1px solid white", margin: "15px 0px" }} />
        <Stack spacing={2} style={{ marginRight: 10 }}>
          {[1, 3, 4, 5, 7, 8, 11, 22, 33, 44, 55, 66, 77, 88].map((val) => (
            <div style={{ width: "100%", height: "100%", backgroundColor: "white", borderRadius: 5 }}>
              <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                <DetailHeader variant="button" display="block" gutterTop style={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center" }}>
                  Order ID: {val}
                </DetailHeader>
                <div style={{ flex: 1, display: "flex", justifyContent: "end", alignItems: "center", marginRight: 10 }}>
                  {/* 
                  green 21b6ae 
                  red E14949
                  grey 7D7272
                  blue 3C86C6
                  orange C6633C
                  
                  // 0 In Process  blue
                  // 1 In Transit  orange
                  // 2 Completed   green
                  // 3 Canceled    grey
                  */}
                  <Button variant="contained" disableRipple style={{ backgroundColor: "#C6633C" }}>
                    Status: In process
                  </Button>
                </div>
              </div>
              <Divider light={false} style={{ borderTop: "1px solid white", margin: "15px 0px" }} />
              <DetailHeader variant="button" display="block" gutterTop>
                Order Detail:
              </DetailHeader>
              {["Bike", "Steak", "Tomato"].map((val) => (
                <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                  <DetailContent variant="overline" display="block" gutterTop style={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center" }}>
                    {val}
                  </DetailContent>
                  <div style={{ flex: 1, display: "flex", justifyContent: "end", alignItems: "center", marginRight: 10 }}>x 1</div>
                </div>
              ))}
              <Divider light={false} style={{ borderTop: "1px solid white", margin: "15px 0px" }} />
              {/* Total */}
              <div style={{ display: "flex", flexDirection: "row", margin: "10px 0px" }}>
                <DetailHeader variant="button" display="block" gutterTop style={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center" }}>
                  Total:
                </DetailHeader>
                <div style={{ flex: 1, display: "flex", justifyContent: "end", alignItems: "center", marginRight: 10 }}>
                  <DetailHeader variant="button" display="block" gutterTop style={{ fontSize: 18 }}>
                    $ 500
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
