import React from "react";
import { useFetchData } from "../../api";

function Product(props) {
  const { userName } = props;
  const { data, loading } = useFetchData();
  console.log("dddd", props);

  return <>{loading && <div>Loading</div>}</>;
}

export default Product;
