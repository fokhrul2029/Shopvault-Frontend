// utils/cartUtils.js

const CART_KEY = "vault-Shop-cart_items";

// Get all cart items
const getCart = () => {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Add a product to the cart
const addToCart = (id: string): { success: boolean; message: string } => {
  const cart = getCart();
  const existing = cart.find((item: any) => item.id === id);

  if (existing) {
    return { success: false, message: "Product already exists in cart!" };
  }
  const product = {
    id: id,
    quantity: 1,
  };
  const updatedCart = [...cart, product];
  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  return { success: true, message: "Product added to cart!" };
};

// Remove a product from cart
const removeFromCart = (id: string) => {
  const cart = getCart().filter((item: any) => item.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Increase product quantity
const increaseQuantity = (id: string) => {
  const cart = getCart().map((item: any) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Decrease product quantity (and remove if quantity becomes 0)
const decreaseQuantity = (id: string) => {
  let cart = getCart()
    .map((item: any) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item: any) => item.quantity > 0); // remove if quantity is 0

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Clear cart
const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};

export {
  getCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
};
