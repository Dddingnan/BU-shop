import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import GoogleButton from "react-google-button";
import styled from "styled-components";
import common from "../statics/common.png";

import { signInWithGoogle } from ".././firebase";

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dividers = styled(Divider)`
  && {
    margin: 15px;
  }
`;

export default function MultiActionAreaCard() {
  return (
    <Wraper>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardContent>
            <Center>
              <img src={common} style={{ width: 160, height: 85, marginBottom: 2 }} alt="Remy Sharp" loading="lazy" />
            </Center>
            <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: 2 }}>
              User Login
            </Typography>
            <Typography variant="body1" sx={{ color: "#ee0000" }}>
              Learning, Virtue, Piety.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Log in to get in updates products that interests you.
            </Typography>
            <Dividers variant="middle" />
            <Center>
              <GoogleButton onClick={() => signInWithGoogle()} />
            </Center>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wraper>
  );
}
