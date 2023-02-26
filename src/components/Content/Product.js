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

import { useFetchData } from "../../api";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c",
    title: "Camera",
    author: "A device for taking still or moving pictures.",
  },
  {
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    title: "Steak",
    author: "A slice of beef.",
  },
  {
    img: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8",
    title: "Burger",
    author: "A similar sandwich or patty.",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "The powder made by roasting and grinding the seeds.",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "A covering for the head in the form of a cone.",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "A sticky yellowish-brown fluid made by bees.",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "A sport in which to put a ball through a hoop.",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato",
    author: "A widely cultivated plant.",
  },
  {
    img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7",
    title: "Bike",
    author: "A bicycle.",
  },
  {
    img: "https://images.unsplash.com/photo-1589998059171-988d887df646",
    title: "Book",
    author: "A written or printed work consisting of pages.",
  },
];

function Product(props) {
  const { userName } = props;
  const { data, loading } = useFetchData();
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
      <Dialog onClose={handleClose} open={open}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Success add to cart — <strong>check it out!</strong>
        </Alert>
      </Dialog>
      <ImageList sx={{ width: "100%", height: "calc(100% - 60px)" }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={<span style={{ color: "white" }}>{item.title} - $50</span>}
              subtitle={<span style={{ color: "white" }}>{item.author}</span>}
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
