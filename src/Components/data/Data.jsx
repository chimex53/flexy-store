import styles from "./Data.module.css";
import productData from "../products/data";
import React, { useState } from "react";

const ProductList = () => {
  // Step 1: Set the initial category to show all products
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Step 2: Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  // Step 3: Handle category change
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className={styles.categoryButtons}>
        <h2>products</h2>
        {/* Buttons for each category */}
        <button onClick={() => handleCategoryClick("all")}>All</button>
        <button onClick={() => handleCategoryClick("sneaker")}>Sneaker</button>
        <button onClick={() => handleCategoryClick("polo")}>Polo</button>
        <button onClick={() => handleCategoryClick("sports")}>Sports</button>
      </div>

      <div className={styles.container}>
        {/* Display the filtered products */}
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.Image} alt={product.description} loading="lazy" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button className={styles.productBtn}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
