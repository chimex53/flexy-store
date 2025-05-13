import { useState } from "react";
import productData from "../products/data";

const [cart, setcart] = useState("all");

const filter =
  setcart === "all"
    ? productData
    : productData.filter((product) => product.category === setcart);
