import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartPage = () => {
  const navigate = useNavigate();

  /* ================= USER ================= */
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  /* ================= LOAD USER ================= */
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(storedUser);
  }, []);

  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) return;
  const CART_KEY = `cart_${user.id}`;
  const storedCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  setCart(storedCart);
}, []);

  /* ================= LOAD CART ================= */
 useEffect(() => {
  if (!user || !user.id) return;

  const CART_KEY = `cart_${user.id}`;
  const storedCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  setCart(storedCart);
}, [user?.id]);


  /* ================= UPDATE CART ================= */
  const updateCart = useCallback(
    (updatedCart) => {
      if (!user) return;
      setCart(updatedCart);
      localStorage.setItem(
        `cart_${user.id}`,
        JSON.stringify(updatedCart)
      );
    },
    [user]
  );

  /* ================= QUANTITY ================= */
  const increaseQty = (id) => {
    updateCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    updateCart(
      cart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  /* ================= DELETE ================= */
  const deleteItem = (id) => {
    updateCart(cart.filter(item => item.id !== id));
    toast.success("Item removed");
  };

  /* ================= TOTAL ================= */
  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity * 89.93,
    0
  );

  /* ================= LOGIN CHECK ================= */
  if (!user) {
    return (
      <>
        <Navbar />
        <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
          <p className="text-red-500 text-2xl">Please login to view cart</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-red-500 text-white px-6 py-2 rounded"
          >
            Login
          </button>
        </div>
        <Footer />
      </>
    );
  }

  /* ================= UI ================= */
  return (
    <>
      <Navbar />

      <div className="w-[85%] mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-8">My Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {cart.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20"
                  />
                  <div>
                    <p>{item.title}</p>
                    <p className="text-sm text-gray-500">
                      ₹{Math.floor(item.price * 89.93)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>
                  ₹{Math.floor(item.price * item.quantity * 89.93)}
                </p>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between mt-8 text-xl font-semibold">
              <span>Subtotal</span>
              <span>₹{Math.floor(subTotal)}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-8 bg-red-500 text-white px-8 py-3 rounded"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
