import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const navigate = useNavigate();

  /* ================= STATES ================= */
  const [payment, setPayment] = useState("cod");
  const [coupon, setCoupon] = useState("");
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const [billing, setBilling] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    town: "",
    phone: "",
    email: "",
  });

  /* ================= LOAD USER & CART ================= */
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedUser);

    if (!loggedUser) return;

    const cartKey = `cart_${loggedUser.id}`;
    const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
    setCart(storedCart);
  }, []);
  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) return;
  const CART_KEY = `cart_${user.id}`;
  const storedCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  setCart(storedCart);
}, []);

  useEffect(() => {
  const userData = JSON.parse(localStorage.getItem("loggedInUser"));
  setUser(userData);

  if (userData) {
    const userCart = JSON.parse(localStorage.getItem(`cart_${userData.id}`)) || [];
    setCart(userCart);
  }
}, []);


  /* ================= CALCULATIONS ================= */
  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity * 89.93,
    0
  );

  const discount =
    coupon === "flat 150" && subTotal > 200
      ? 150
      : coupon === "flat 250" && subTotal > 300
      ? 250
      : coupon === "flat 50" && subTotal > 100
      ? 50
      : 0;

  const total = subTotal - discount;

  /* ================= HANDLERS ================= */
  const handleBillingChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const saveBillingDetails = (e) => {
    e.preventDefault();
    localStorage.setItem("billingDetails", JSON.stringify(billing));
    toast.success("Billing details saved ✅");
  };

  const applyCoupon = (e) => {
    e.preventDefault();
    discount
      ? toast.success("Coupon applied 🎉")
      : toast.error("Invalid or not applicable coupon");
  };

 const placeOrder = () => {
  if (!billing.firstName || !billing.phone || !billing.email || !billing.streetAddress || !billing.town) {
    toast.error("Please fill all required billing details!");
    return;
  }

  const CART_KEY = `cart_${user.id}`;
  const ORDER_KEY = `orders_${user.id}`;

  const orders = JSON.parse(localStorage.getItem(ORDER_KEY)) || [];

  orders.push({
    id: Date.now(),
    items: cart,
    billing,
    total,
    payment: payment,
    date: new Date().toLocaleString(),
  });

  localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
  localStorage.removeItem(CART_KEY);
  setCart([]);

  toast.success("Order placed 🎉");
  navigate("/");
};


  /* ================= LOGIN CHECK ================= */
  if (!user) {
    return (
      <>
        <Header />
        <Navbar />
        <div className="flex flex-col justify-center items-center h-[60vh] text-red-500 gap-5 text-3xl font-semibold">
          Please login first
          <button
            onClick={() => navigate("/login")}
            className="bg-red-500 px-6 py-2 text-white rounded"
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
      <Header />
      <Navbar />

      <div className="w-[90%] mx-auto py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ================= BILLING ================= */}
        <div>
          <h2 className="text-xl font-semibold mb-8">Billing Details</h2>

          <form className="space-y-5" onSubmit={saveBillingDetails}>
            {[
              { label: "First Name*", name: "firstName" },
              { label: "Company Name", name: "companyName" },
              { label: "Street Address*", name: "streetAddress" },
              { label: "Apartment", name: "apartment" },
              { label: "Town / City*", name: "town" },
              { label: "Phone*", name: "phone" },
              { label: "Email*", name: "email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-sm text-gray-600">{field.label}</label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={billing[field.name]}
                  onChange={handleBillingChange}
                  required={field.label.includes("*")}
                  className="w-full bg-gray-100 px-4 py-3 rounded outline-none"
                />
              </div>
            ))}

            <button className="bg-black text-white px-6 py-2 rounded">
              Save Billing
            </button>
          </form>
        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img src={item.thumbnail} className="w-14 h-14" alt="" />
                <span>
                  {item.title} × {item.quantity}
                </span>
              </div>
              <span>
                ₹{Math.floor(item.price * item.quantity * 89.93).toLocaleString()}
              </span>
            </div>
          ))}

          <hr />

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{Math.floor(subTotal).toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <span>- ₹{discount}</span>
          </div>

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{Math.floor(total).toLocaleString()}</span>
          </div>

          {/* PAYMENT */}
          <div className="space-y-2">
            {["bank", "cod"].map((p) => (
              <label key={p} className="flex gap-2">
                <input
                  type="radio"
                  checked={payment === p}
                  onChange={() => setPayment(p)}
                />
                {p === "bank" ? "Bank" : "Cash on Delivery"}
              </label>
            ))}
          </div>

          {/* COUPON */}
          <form onSubmit={applyCoupon} className="flex gap-4">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value.toLowerCase())}
              placeholder="Coupon Code"
              className="flex-1 border px-4 py-3 rounded"
            />
            <button className="bg-[#df4444] text-white px-6 rounded">
              Apply
            </button>
          </form>

          {/* PLACE ORDER */}
          <button
            type="button"
            onClick={placeOrder}
            className="w-48 bg-[#df4444] text-white py-3 rounded"
          >
            Place Order
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
