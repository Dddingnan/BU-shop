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

import { useFetchData } from "../../api";

function Product(props) {
  const { userName } = props;
  const { data, loading } = useFetchData("/products");
  const [open, setOpen] = React.useState(false);

  console.log("dddd", props);

  const handleClickOpen = (item) => {
    setOpen(true);
    setTimeout(() => setOpen(false), 1000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom style={{ color: "white" }}>
        Product
      </Typography>
      {loading && <LinearProgress />}
      <Dialog onClose={handleClose} open={open}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Success add to cart — <strong>check it out!</strong>
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
                <Button variant="contained" endIcon={<ShoppingCartIcon />} onClick={() => handleClickOpen(item)} style={{ marginTop: 8, marginRight: 8 }}>
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
