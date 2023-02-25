import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Content from "./Content/Content";

function Dashboard(user) {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <Content tab={tab} {...user} />
      <BottomNavigation
        showLabels
        value={tab}
        onChange={(event, newValue) => {
          console.log("onChange----", newValue);
          setTab(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </>
  );
}

export default Dashboard;
