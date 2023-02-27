import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

import { useGetData } from "../../api";

function Cart(props) {
  const { uid } = props;
  const { data, loading } = useGetData("/carts/" + uid);

  const handleSubmit = () => {};

  return (
    <>
      <Typography variant="h5" gutterBottom style={{ color: "white" }}>
        Shopping Cart
      </Typography>
      {loading && <LinearProgress />}
      <div style={{ width: "100%", height: "calc(100% - 100px)", overflow: "auto" }}>
        {data.map((val) => (
          <Card sx={{ width: "99%", margin: "10px 0px" }} key={val.productID}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={val.photoUrl} alt={val.name} />
              <CardContent>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography gutterBottom variant="h5" component="div" style={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center" }}>
                    {val.name}
                  </Typography>
                  <div style={{ flex: 1, display: "flex", justifyContent: "end", alignItems: "center", marginRight: 10 }}>
                    <Typography variant="h5" component="div">
                      $ {val.price}
                    </Typography>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="body2" color="text.secondary" style={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center" }}>
                    {val.description}
                  </Typography>
                  <div style={{ flex: 1, display: "flex", justifyContent: "end", alignItems: "center", marginRight: 10 }}>
                    <Typography variant="body2">x {val.sum}</Typography>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => handleSubmit()}
        style={{
          width: "100%",
          margin: "10px 0px",
        }}
      >
        Order
      </Button>
    </>
  );
}

export default Cart;
