import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  icon: string;
};

type CartItem = Product & {
  qty: number;
};

const App: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Premium Pen", price: 199, icon: "🖊️" },
    { id: 2, name: "Notebook", price: 499, icon: "📓" },
    { id: 3, name: "Steel Bottle", price: 699, icon: "🥤" },
    { id: 4, name: "Backpack", price: 1299, icon: "🎒" },
    { id: 5, name: "Headphones", price: 2499, icon: "🎧" },
  ];

  const [cart, setCart] = useState<CartItem[]>([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, { ...product, qty: 1 }]);
  };

  const increase = (id: number) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decrease = (id: number) => {
    setCart(
      cart
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const availableProducts = products.filter(
    p => !cart.some(c => c.id === p.id)
  );

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.logo}>EliteCart</div>

        <input
          placeholder="Search products..."
          style={styles.search}
        />

        <button
          style={styles.cartBtn}
          onClick={() => setOpenCart(!openCart)}
        >
          🛒 {cart.length}
        </button>
      </div>

      {/* PRODUCTS */}
      <div style={styles.container}>
        <h2 style={styles.title}>Trending Products</h2>

        <div style={styles.grid}>
          {availableProducts.map(product => (
            <div key={product.id} style={styles.card}>
              <div style={styles.icon}>{product.icon}</div>

              <div style={styles.productName}>
                {product.name}
              </div>

              <div style={styles.price}>
                ₹{product.price}
              </div>

              <button
                style={styles.addBtn}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}

          {availableProducts.length === 0 && (
            <p style={{ color: "#777" }}>
              All items added to cart
            </p>
          )}
        </div>
      </div>
      {openCart && (
        <div style={styles.cartOverlay}>
          <div style={styles.cartPanel}>

            <div style={styles.cartHeader}>
              <div style={{ fontWeight: 700 }}>Your Cart</div>
              <button
                style={styles.closeBtn}
                onClick={() => setOpenCart(false)}
              >
                ✕
              </button>
            </div>
            <div style={styles.cartItems}>
              {cart.length === 0 && (
                <div style={styles.emptyCart}>
                  Your cart is empty
                </div>
              )}

              {cart.map(item => (
                <div key={item.id} style={styles.cartItem}>
                  <div style={styles.cartIcon}>
                    {item.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={styles.cartItemName}>
                      {item.name}
                    </div>
                    <div style={styles.cartItemPrice}>
                      ₹{item.price}
                    </div>
                  </div>

                  <div style={styles.qtyBox}>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => decrease(item.id)}
                    >
                      −
                    </button>

                    <div style={styles.qtyText}>
                      {item.qty}
                    </div>

                    <button
                      style={styles.qtyBtn}
                      onClick={() => increase(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div style={styles.lineTotal}>
                    ₹{item.qty * item.price}
                  </div>
                </div>
              ))}
            </div>

              {cart.length > 0 && (
              <div style={styles.cartFooter}>
                <div style={styles.totalRow}>
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>

                <button
                  style={styles.checkoutBtn}
                  onClick={() => {
                    alert("Order placed successfully ✅");
                    setCart([]);
                    setOpenCart(false);
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default App;


/* ========================= */
/* ======= STYLES ========= */
/* ========================= */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "#f5f6fa",
    fontFamily: "Inter, sans-serif",
  },

  header: {
    height: 70,
    background: "#111827",
    color: "white",
    padding: "0 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontSize: 22,
    fontWeight: 700,
  },

  search: {
    width: "40%",
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #ddd",
    outline: "none",
  },

  cartBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  },

  container: {
    padding: "60px",
  },

  title: {
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 700,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 30,
  },

  card: {
    background: "white",
    padding: 30,
    borderRadius: 16,
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    transition: "0.3s",
  },

  icon: {
    fontSize: 60,
    marginBottom: 20,
  },

  productName: {
    fontWeight: 600,
    marginBottom: 10,
  },

  price: {
    fontWeight: 700,
    marginBottom: 20,
  },

  addBtn: {
    background: "#111827",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: 8,
    cursor: "pointer",
    width: "100%",
  },

  cartOverlay: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "flex-end",
  },

  cartPanel: {
    width: 420,
    background: "white",
    display: "flex",
    flexDirection: "column",
  },

  cartHeader: {
    padding: 20,
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
  },

  closeBtn: {
    border: "none",
    background: "none",
    fontSize: 18,
    cursor: "pointer",
  },

  cartItems: {
    flex: 1,
    overflowY: "auto",
  },

  cartItem: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    borderBottom: "1px solid #f1f1f1",
    gap: 15,
  },

  cartIcon: {
    fontSize: 28,
  },

  cartItemName: {
    fontWeight: 600,
  },

  cartItemPrice: {
    fontSize: 13,
    color: "#666",
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    border: "1px solid #ddd",
    background: "white",
    cursor: "pointer",
  },

  qtyText: {
    minWidth: 20,
    textAlign: "center",
  },

  lineTotal: {
    fontWeight: 600,
    minWidth: 70,
    textAlign: "right",
  },

  cartFooter: {
    padding: 20,
    borderTop: "1px solid #eee",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    fontWeight: 700,
    fontSize: 18,
  },

  checkoutBtn: {
    width: "100%",
    padding: 12,
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  },

  emptyCart: {
    padding: 40,
    textAlign: "center",
    color: "#888",
  },
};