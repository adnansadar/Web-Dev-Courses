import React from "react";

function Product(props) {
  return (
    <div>
      <h2>{props.productname.name}</h2>
      <h2>{props.productname.username}</h2>
      <h2>{props.productname.email}</h2>
    </div>
  );
}

export default Product;
