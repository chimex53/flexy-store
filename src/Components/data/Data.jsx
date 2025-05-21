import styles from "./Data.module.css";
import productData from "../products/data";
import React, { useState } from "react";
import Modal from "react-modal";
import { IoCart } from "react-icons/io5";

Modal.setAppElement("#root");

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtered products by category and search query
  const filteredProducts = productData.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesSearch =
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.name?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getCartTotals = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    return { totalItems, totalPrice };
  };

  const { totalItems, totalPrice } = getCartTotals();

  return (
    <div>
      {/* Category and Search */}
      <section id="shop">
        <div className={styles.category}>
          <h2>Products</h2>
          {["all", "sneaker", "polo", "sports"].map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${
                selectedCategory === cat ? styles.activeCategory : ""
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        {/* search function */}
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </section>

      {/* Product Grid */}
      <div className={styles.container}>
        {filteredProducts.length === 0 ? (
          <p>No products available in this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.Image}
                alt={product.description}
                loading="lazy"
              />
              <p id={styles.description}>{product.description}</p>
              <p className={styles.price}>Price: ${product.price}</p>
              <button
                className={styles.productBtn}
                onClick={() => handleAddToCart(product)}
              >
                <IoCart size={15} color="orange" /> Add to cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* Cart Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Cart"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h3>Cart Details</h3>
        <button onClick={closeModal} className={styles.closeBtn}>
          Close
        </button>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className={styles.cartList}>
              {cart.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <img
                    src={item.Image}
                    alt={item.description}
                    width={100}
                    height={100}
                  />
                  <div>
                    <p className={styles.cartDescription}>{item.description}</p>
                    <p>
                      ${item.price} × {item.quantity}
                    </p>
                    <div className={styles.quantityControls}>
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeBtn}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.cartSummary}>
              <p>Total Items: {totalItems}</p>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ProductList;
