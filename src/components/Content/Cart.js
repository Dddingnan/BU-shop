import React, { useState, useEffect, useCallback } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios";

import config from "../../config";

function Cart(props) {
  const { uid } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ status: "info", open: false, message: "" });

  const fetchData = useCallback(async () => {
    try {
      const { data: response } = await axios.get(config.apiBasePath + "/carts/" + uid);
      setData(response);
    } catch (error) {
      setModal({
        status: "error",
        message: error.message,
        open: true,
      });
    }
    setLoading(false);
  }, [uid]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async () => {
    try {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        // Check product status and product stock first.
        await axios.put(config.apiBasePath + "/product/stock/" + uid, {
          productID: element.productID,
          stock: element.total,
        });
      }
      // Insert Order and order detail
      await axios.post(config.apiBasePath + "/order/" + uid, {
        orderDetail: data.map((val) => ({ productID: val.productID, stock: val.total })),
      });
      // Delete carts.
      await axios.delete(config.apiBasePath + "/cart/" + uid);
      // Re-fetch cart.
      await fetchData();
      setModal({
        status: "success",
        open: true,
      });
    } catch (error) {
      setModal({
        status: "error",
        message: error.response.data?.message,
        open: true,
      });
    }
  };

  const handleClose = () => {
    setModal({
      status: "info",
      open: false,
    });
  };

  return (
    <>
      <Typography variant="h5" gutterBottom style={{ color: "white" }}>
        Shopping Cart
      </Typography>
      {loading && <LinearProgress />}
      <Dialog onClose={handleClose} open={modal.open}>
        <Alert severity={modal.status}>
          <AlertTitle>{modal.status}</AlertTitle>
          {modal.status === "success" ? (
            <>
              {modal.status} add to order — <strong>check it out!</strong>
            </>
          ) : (
            <>
              {modal.message} — <strong>check it again!</strong>
            </>
          )}
        </Alert>
      </Dialog>
      <div style={{ width: "100%", height: "calc(100% - 100px)", overflow: "auto" }}>
        {data.map((val) => (
          <Card sx={{ width: "99%", margin: "10px 0px" }} key={val.productID}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={val.photoUrl} alt={val.name} />
              <CardContent>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography gutterBottom variant="h5" component="div" style={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center" }}>
                    {val.name} - ID - {val.productID}
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
                    <Typography variant="body2">x {val.total}</Typography>
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
        disabled={!data.length}
      >
        Order
      </Button>
    </>
  );
}

export default Cart;
