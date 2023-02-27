import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styled from "styled-components";

import Content from "./Content/Content";

const Wraper = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 750px;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    /* For everything bigger than 1024px */
    width: 100%;
  }
`;

function Dashboard(user) {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <Wraper>
        <Inner>
          <Content tab={tab} {...user} />
        </Inner>
      </Wraper>

      <BottomNavigation
        showLabels
        value={tab}
        onChange={(event, newValue) => {
          setTab(newValue);
        }}
      >
        <BottomNavigationAction label="Product" icon={<LocalMallIcon />} />
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="Setting" icon={<SettingsIcon />} />
      </BottomNavigation>
    </>
  );
}

export default Dashboard;
