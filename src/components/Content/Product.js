import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Dialog from "@mui/material/Dialog";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";

import config from "../../config";
import { useGetData } from "../../api";

function Product(props) {
  const { uid } = props;
  const { data, loading } = useGetData("/products");
  const [modal, setModal] = React.useState({ status: "info", open: false, message: "" });

  const handleClickOpen = async (item) => {
    const { productID } = item;
    try {
      await axios.post(config.apiBasePath + "/cart/" + uid, {
        productID,
        stock: 1,
      });
      setModal({
        status: "success",
        open: true,
      });
    } catch (error) {
      setModal({
        status: "error",
        message: error.message,
        open: true,
      });
    }
    setTimeout(() => handleClose(), 1200);
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
        Product
      </Typography>
      {loading && <LinearProgress />}
      <Dialog onClose={handleClose} open={modal.open}>
        <Alert severity={modal.status}>
          <AlertTitle>{modal.status}</AlertTitle>
          {modal.status === "success" ? (
            <>
              {modal.status} to add cart — <strong>check it out!</strong>
            </>
          ) : (
            <>
              {modal.message} — <strong>check it again!</strong>
            </>
          )}
        </Alert>
      </Dialog>
      <ImageList sx={{ width: "100%", height: "calc(100% - 60px)" }}>
        {data.map((item) => (
          <ImageListItem key={item.photoUrl}>
            <img src={`${item.photoUrl}?w=248&fit=crop&auto=format`} srcSet={`${item.photoUrl}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.name} loading="lazy" />
            <ImageListItemBar
              title={
                <span style={{ color: "white" }}>
                  {item.name} - ${item.price}
                </span>
              }
              subtitle={<span style={{ color: "white" }}>{item.description}</span>}
              position="below"
              actionIcon={
                <Button
                  variant="contained"
                  endIcon={<ShoppingCartIcon />}
                  onClick={() => handleClickOpen(item)}
                  style={{ marginTop: 8, marginRight: 8 }}
                  // disabled={!item.stock}
                >
                  Add
                </Button>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default Product;
