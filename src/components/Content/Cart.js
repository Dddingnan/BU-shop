import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Cart(props) {
  return (
    <>
      <Typography variant="h5" gutterBottom style={{ color: "white" }}>
        Shopping Cart
      </Typography>
      <div style={{ width: "100%", height: "calc(100% - 56px)", overflow: "auto" }}>
        {[1, 2, 3, 4, 5].map((val) => (
          <Card sx={{ width: "99%", margin: "10px 0px" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Cart;
