import React from "react";

import Product from "./Product";
import Cart from "./Cart";
import Setting from "./Setting";

function Content(props) {
  const { tab } = props;

  switch (tab) {
    case 1:
      return <Cart {...props} />;
    case 2:
      return <Setting {...props} />;
    default:
      return <Product {...props} />;
  }
}

export default Content;
