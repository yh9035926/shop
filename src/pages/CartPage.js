import React, { useState } from "react";

const CartPage = () => {
  // Sample cart data for demonstration purposes
  const initialCart = [
    { id: 1, name: "Product 1", price: 20.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 30.49, quantity: 1 },
  ];

  const [cart, setCart] = useState(initialCart);

  // Calculate cart totals
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = 0.1 * subtotal; // 10% tax for demonstration
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value, 10);
                    const updatedCart = cart.map((cartItem) =>
                      cartItem.id === item.id
                        ? { ...cartItem, quantity: newQuantity }
                        : cartItem
                    );
                    setCart(updatedCart);
                  }}
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  onClick={() => {
                    const updatedCart = cart.filter(
                      (cartItem) => cartItem.id !== item.id
                    );
                    setCart(updatedCart);
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-totals">
        <div>
          <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
        </div>
        <div>
          <strong>Tax (10%):</strong> ${tax.toFixed(2)}
        </div>
        <div>
          <strong>Total:</strong> ${total.toFixed(2)}
        </div>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
